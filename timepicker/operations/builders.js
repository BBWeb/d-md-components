var _ = require('lodash');
var Timepicker = require('./../index');

Timepicker.prototype._getMinutes = function() {
  var minutes = this._getStringRange(1, 60);
  minutes.push('0');

  minutes = _.map(minutes, function (value) {
    if (value % 5) return { value: value, nonumber: true };
    return value;
  });

  return minutes;
};

Timepicker.prototype._getHoursInner = function() {
  var hoursOuter = this._getStringRange(13, 24);

  hoursOuter.push('00');

  return hoursOuter;
};

Timepicker.prototype._getHoursOuter = function() {
  return this._getStringRange(1, 13);
};

Timepicker.prototype._getStringRange = function(min, max) {
  return _.map(_.range(min, max),  function (value) {
    return value.toString();
  });
};

Timepicker.prototype._getActiveHour = function(value) {
  if (!value) return '12';

  return _.head(_.split(value, ':'));
};

Timepicker.prototype._getActiveMinute = function(value) {
  if (!value) return '0';

  return _.tail(_.split(value, ':'));
};

