var Timepicker = require('./../index');

Timepicker.prototype.padNumber = function(timeString) {
  return (timeString.length < 2) ? 0 + timeString : timeString;
};
