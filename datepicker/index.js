var moment = require('moment');

module.exports = Datepicker;

/**
 * Creates a datepicker component.
 */
function Datepicker() {}

Datepicker.prototype.view = __dirname + '/views';
Datepicker.prototype.style = __dirname + '/styles';
Datepicker.prototype.name = 'datepicker';
Datepicker.prototype.components = [];

require('./operations');
require('./actions');
require('./viewhelpers');

Datepicker.prototype.init = function(model) {
  var initialDate = this.getAttribute('initialDate');
  var today = moment.utc();
  var selectedDate = moment.utc(initialDate);
  var currentDate = selectedDate.clone();
  var month = this._getMonth(selectedDate);

  model.setEach({
    isMonthViewOne: true,
    monthTwoPositionClass: 'days---dates--right',
    monthOne: month,
    selectedDate: selectedDate,
    currentDate: currentDate,
    today: today
  });

  this._initYears();
};

Datepicker.prototype._initYears = function() {
  var options = this.getAttribute('options');
  var currentYear = this.model.get('currentDate').year();
  var firstYear = (options && options.minDate) ? moment(options.minDate).year() : currentYear - 100;
  var lastYear = (options && options.maxDate) ? moment(options.maxDate).year() : currentYear + 100;
  var years = [];

  while (firstYear <= lastYear) {
    years.push(firstYear);
    firstYear++;
  }

  this.model.set('years', years);
};
