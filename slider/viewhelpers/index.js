var Slider = require('./../index');

Slider.prototype.getLabel = function(value, labels, min) {
  if(!labels || !labels[value - min]) return value;

  return labels[value - min];
};
