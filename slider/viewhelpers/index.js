var Slider = require('./../index');

Slider.prototype.getLabel = function(value) {
  var labels = this.getAttribute('labels');
  var min = this.getAttribute('min');

  if(!labels || !labels[value - min]) return value;

  return labels[value - min];
};
