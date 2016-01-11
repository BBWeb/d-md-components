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
  model.fn('getThumbPosition', function (value, max, min) {
    var steps = (max || 100) - (min || 0);
    return (100 / steps) * (value - (min || 0));
  });

  model.start('thumbPosition', 'value', 'max', 'min', 'getThumbPosition');
};
