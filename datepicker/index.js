module.exports = Datepicker;

/**
 * Creates a datepicker component.
 */
function Datepicker() {}

Datepicker.prototype.view = __dirname + '/views';
Datepicker.prototype.style = __dirname + '/styles';
Datepicker.prototype.name = 'datepicker';
Datepicker.prototype.components = [];

require('./operations');
require('./operations/builders');
require('./actions');
require('./viewhelpers');

Datepicker.prototype.init = function(model) {
  var options = this.getAttribute('options');

  model.setEach({
    isMonthViewOne: true,
    monthTwoPositionClass: 'days---dates--right'
  });

  if (options) {
    if (options.autoOk) this.model.set('autoOk', options.autoOk);
    if (options.disableCancel) this.model.set('disableCancel', options.disableCancel);
    if (options.accent) this.model.set('accent', options.accent);
  }
};
