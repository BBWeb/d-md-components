var moment = require('moment');
var Datepicker = require('./../index');

Datepicker.prototype.getDateString = function(momentDate) {
  if (!momentDate) return '';

  return momentDate.format('ddd, D MMM');
};

Datepicker.prototype.getMonthYearString = function(momentDate) {
  if (!momentDate) return '';

  return momentDate.format('MMMM YYYY');  
};

Datepicker.prototype.getYearString = function(momentDate) {
  if (!momentDate) return '';
  
  return momentDate.format('YYYY');  
};

Datepicker.prototype.getMonthString = function(monthIndex) {
  return moment().month(monthIndex).format('MMMM');
};

Datepicker.prototype.getDayNumber = function(momentDate) {
  return '' + momentDate.date();
};

Datepicker.prototype.isEqualDates = function(firstMomentDate, secondMomentDate, isSelected) {
  return firstMomentDate.isSame(secondMomentDate, 'day');
};

Datepicker.prototype.isEqualYear = function(year, momentDate) {
  var secondYear = momentDate.year();

  return year === secondYear;
};

Datepicker.prototype.isEqualMonth = function(monthIndex, momentDate) {
  var secondMonth = momentDate.month();

  return monthIndex === secondMonth;
};
