var Slider = require('./../index');

Slider.prototype.getLabel = function(value) {
  var labels = this.getAttribute('labels');

  if(!labels || !labels[value - this.min]) return value;

  return labels[value - this.min];
};
