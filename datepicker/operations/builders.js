var moment = require('moment');
var _ = require('lodash');
var Datepicker = require('./../index');

Datepicker.prototype._getNextMonth = function(momentDate) {
  var nextMonth = momentDate.clone().add(1, 'month');
  this._setCurrentDate(nextMonth);

  return this._getMonth(nextMonth);
};

Datepicker.prototype._getPreviousMonth = function(momentDate) {
  var previousMonth = momentDate.clone().subtract(1, 'month');
  this._setCurrentDate(previousMonth);

  return this._getMonth(previousMonth);
};

Datepicker.prototype._getMonth = function(momentDate) {
  var month = this._getEmptyDaysBefore(momentDate).concat(this._getDaysInMonth(momentDate), this._getEmptyDaysAfter(momentDate));
  var weeks = _.map(_.chunk(month, 7), function wrapInObject(week) {
    return {
      number: this._getWeekNumber(week),
      days: week
    };
  }, this);

  return weeks;
};

Datepicker.prototype._getDaysInMonth = function(momentDate) {
  var date = this._getFirstDateOfMonth(momentDate);
  var nrOfDays = momentDate.daysInMonth();
  var days = _.times(nrOfDays, function addDate(index) {
    return moment.utc(date.date(index + 1));
  });

  return days;
};

Datepicker.prototype._getEmptyDaysBefore = function(momentDate) {
  var date = this._getFirstDateOfMonth(momentDate);
  var dayNumber = date.isoWeekday();
  
  return this._getEmptyDays(dayNumber - 1);
};

Datepicker.prototype._getEmptyDaysAfter = function(momentDate) {
  var date = this._getLastDateOfMonth(momentDate);
  var dayNumber = date.isoWeekday();

  return this._getEmptyDays(7 - dayNumber);
};

Datepicker.prototype._getEmptyDays = function(nrOfDays) {
  return _.times(nrOfDays, _.constant({ noDate: true }));
};

Datepicker.prototype._getWeekNumber = function(week) {
  if (week[0] instanceof moment) return week[0].isoWeek();
  if (week[6] instanceof moment) return week[6].isoWeek();

  throw new Error('Week is not constructed correctly');
};

Datepicker.prototype._getFirstDateOfMonth = function(momentDate) {
  return momentDate.clone().date(1);
};

Datepicker.prototype._getLastDateOfMonth = function(momentDate) {
  return momentDate.clone().date(momentDate.daysInMonth());
};

Datepicker.prototype._getYears = function(momentDate) {
  var options = this.getAttribute('options');
  var currentYear = momentDate.year();
  var firstYear = (options && options.minDate) ? moment(options.minDate).year() : currentYear - 100;
  var lastYear = (options && options.maxDate) ? moment(options.maxDate).year() : currentYear + 100;
  var years = [];

  while (firstYear <= lastYear) {
    years.push(firstYear);
    firstYear++;
  }

  return years;
};
