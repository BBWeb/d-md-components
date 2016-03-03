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
  var self = this;
  this.step = this.getAttribute('step') || 1;
  model.setNull('min', 0);
  model.setNull('max', 100);

  model.start('thumbPosition', 'value', 'steps', function (value, steps) {
    return (100 / steps) * ((value - model.get('min')) / self.step);
  });

  model.start('steps', 'min', 'max', function (min, max) {
    return ((max - min) / self.step);
  });

  model.on('change', 'value', function () {
    if (model.get('invalid')) self._setValid();
  });
};
