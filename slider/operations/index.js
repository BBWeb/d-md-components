var Slider = require('./../index');

Slider.prototype._setInvalid = function(message) {
  this.model.setEach({
    invalid: true,
    errorMessage: message
  });
};

Slider.prototype._setValid = function() {
  this.model.del('invalid');
  this.model.del('message');
};
