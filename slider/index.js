module.exports = Slider;

function Slider() {}

Slider.prototype.view = __dirname + '/views';
Slider.prototype.style = __dirname + '/styles';
Slider.prototype.name = 'slider';
Slider.prototype.components = [];

require('./operations');
require('./actions');
require('./viewhelpers');

Slider.prototype.init = function(model) {
  this.min = this.getAttribute('min') || 0;
  this.max = this.getAttribute('max') || 100;
  this.steps = (this.max - this.min);

  var self = this;
  model.fn('getThumbPosition', function (value) {
    return (100 / self.steps) * (value - self.min);
  });

  model.start('thumbPosition', 'value', 'getThumbPosition');
};
