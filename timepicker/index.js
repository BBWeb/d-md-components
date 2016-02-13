module.exports = Timepicker;

/**
 * A timepicker component.
 *
 * @fires Timepicker#show     - Fired when the Timepicker is shown.
 * @fires Timepicker#hide     - Fired when the Timepicker is hidden.
 * @fires Timepicker#selected - Fired when a user clicks OK action.
 *
 * @param {Model||String} [value]              - A path to write the selected value to or a time string to use as initial value.
 * @param {Boolean}       [inline]             - Default false. Decides whether the timepicker displays in the middle of container or inline.
 * @param {Object}        [options]            - An options object.
 *   @param {String}      [options.accent]     - A css string to paint the timepicker.
 *   @param {String}      [options.okText]     - A string to replace the select-and-close button text. Default is 'OK'.
 *   @param {String}      [options.cancelText] - A string to replace the dismiss button text. Default is 'Cancel'.
 *   @param {String}      [options.activeHour] - A string set a first hour value. Default is set by value or 12 if no value is selected.
 *   @param {String}      [options.activeMinute] - A string to set a first minute value. Default is set by value or '0' if no value is selected.
 */
function Timepicker() {}

Timepicker.prototype.view = __dirname + '/views';
Timepicker.prototype.style = __dirname + '/styles';
Timepicker.prototype.name = 'timepicker';
Timepicker.prototype.components = [];

require('./operations');
require('./operations/builders');
require('./actions');
require('./viewhelpers');

Timepicker.prototype.init = function(model) {
  var options = this.getAttribute('options');
  var minutes = this._getMinutes();
  var hoursInner = this._getHoursInner();
  var hoursOuter = this._getHoursOuter();
  var value = this.getAttribute('value');
  var activeHour = this._getActiveHour(value);
  var activeMinute = this._getActiveMinute(value);

  if (options) {
    if (options.accent) model.set('accent', options.accent);
    if (options.activeHour) activeHour = options.activeHour;
    if (options.activeMinute) activeMinute = options.activeMinute;
  }

  model.setEach({
    hoursOuter: hoursOuter,
    hoursInner: hoursInner,
    minutes: minutes,
    activeHour: activeHour,
    activeMinute: activeMinute
  });

  model.start('hourPointerStyles', 'activeHour', function (hourString) {
    var hour = parseInt(hourString);

    var pointerLength = (hour < 13 && hour !== 0) ? 130 : 90;
    var rotation = (360 / 12) * hour;

    return 'width:' + pointerLength + 'px;transform: rotateZ(' + rotation +'deg);';    
  });

  model.start('minutePointerStyles', 'activeMinute', function (minuteString) {
    var minute = parseInt(minuteString);

    var rotation = (360 / 60) * minute;

    return 'transform: rotateZ(' + rotation +'deg);';    
  });
};
