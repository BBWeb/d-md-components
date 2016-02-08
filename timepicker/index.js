module.exports = Timepicker;

/**
 * A timepicker component.
 *
 * @fires Timepicker#show     - Fired when the Timepicker is shown.
 * @fires Timepicker#hide     - Fired when the Timepicker is hidden.
 * @fires Timepicker#selected - Fired when a user clicks Ok action OR when user clicks a minute if autoOk === true.
 *
 * @param {Model||String}      [value]           - A path to write the selected value to or a time string to use as initial value.
 * @param {Boolean}            [inline]          - Default false. Decides whether the timepicker displays in the middle of container (preferably body) or inline.
 * @param {Object}             [options]         - An options object.
 *   @param {String}           [accent]          - A css string to paint the timepicker.
 *   @param {String}           [okText]          - A string to replace the select-and-close button text. Default is 'OK'.
 *   @param {String}           [cancelText]      - A string to replace the dismiss button text. Default is 'Cancel'.
 *   @param {Boolean}          [disableCancel]   - Default false. If true, removes the Cancel-button. Dismissal of the timepicker will still be possible by clicking outside or Ok/autoclose.
 *   @param {Boolean}          [autoOk]          - Default false. If true, removes the OK-button and selects time as soon as user clicks a minute.
 */
function Timepicker() {}

Timepicker.prototype.view = __dirname + '/views';
Timepicker.prototype.style = __dirname + '/styles';
Timepicker.prototype.name = 'timepicker';
Timepicker.prototype.components = [];

require('./operations');
require('./actions');
require('./viewhelpers');

Timepicker.prototype.init = function(model) {

};
