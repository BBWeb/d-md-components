var moment = require('moment/min/moment-with-locales.min');

module.exports = Datepicker;

/**
 * A datepicker component which can show additional buttons and fire events for them.
 *
 * @fires Datepicker#show     - Fired when the Datepicker is shown.
 * @fires Datepicker#hide     - Fired when the Datepicker is hidden.
 * @fires Datepicker#selected - Fired when a user clicks Ok action OR when user clicks a date if autoOk === true.
 * @fires Datepicker#action   - Fired when a user clicks an optinal provided button.
 *
 * @param {Model||String}      [value]           - A path to write the selected value to or a date string to use as initial value.
 * @param {Boolean}            [inline]          - Default false. Decides whether the Datepicker displays in the middle of container (preferably body) or inline.
 * @param {Object[]||String[]} [actions]         - An array of actions displayed as buttons. Buttons emits the string back when pressed. Can also be an array of objects with options for the buttons.
 *   @param {String}           text              - Mandatory if actions are objects. Used as button text and passed in the event.
 *   @param {Boolean}          [disableDismiss]  - Default false. Actions dismiss the Datepicker by default. Set this true if that's not the desired behaviour.
 *   @param {String}           [class]           - A class to use for this specific button. Buttons will use the optional accent color by default unless this class is provided.
 * @param {Object}             [options]         - An options object.
 *   @param {String}           [locale]          - A locale string that works with moment ('en'). Default language is english.
 *   @param {String}           [accent]          - A css string to style the datepicker.
 *   @param {String}           [okText]          - A string to replace the select-and-close button text. Default is 'OK'.
 *   @param {String}           [cancelText]      - A string to replace the dismiss button text. Default is 'Cancel'.
 *   @param {Boolean}          [disableCancel]   - Default false. If true, removes the Cancel-button. Dismissal of the datepicker will still be possible by clicking outside or Ok/autoclose.
 *   @param {Boolean}          [autoOk]          - Default false. If true, removes the OK-button and selects date as soon as user clicks a date.
 *   @param {Object|String}    [minDate]         - Default value||today - 100 years. The beginning of a range of valid dates. The range includes the minDate.
 *   @param {Object|String}    [maxDate]         - Default value||today + 100 years. The end of a range of valid dates. The range includes the maxDate.
 */
function Datepicker() {}

Datepicker.prototype.view = __dirname + '/views';
Datepicker.prototype.style = __dirname + '/styles';
Datepicker.prototype.name = 'datepicker';
Datepicker.prototype.components = [];

require('./operations');
require('./operations/builders');
require('./actions');
require('./viewhelpers');

Datepicker.prototype.init = function(model) {
  var options = this.getAttribute('options');
  var locale = ['en'];
  var months;
  
  if (options) {
    if (options.autoOk) this.model.set('autoOk', options.autoOk);
    if (options.disableCancel) this.model.set('disableCancel', options.disableCancel);
    if (options.accent) this.model.set('accent', options.accent);
    if (options.locale) locale.unshift(options.locale);
  }

  moment.locale(locale);
  months = this._getMonths();

  model.setEach({
    isMonthViewOne: true,
    monthTwoPositionClass: 'days---dates--right',
    months: months
  });
};
