module.exports = Snackbar;

/**
 * Creates a snackbar component. It is possible to pass a global options object as an attribute. For public methods, see ./actions.
 */
function Snackbar() {}

Snackbar.prototype.view = __dirname + '/views';
Snackbar.prototype.style = __dirname + '/styles';
Snackbar.prototype.name = 'snackbar';
Snackbar.prototype.components = [];

require('./operations');
require('./actions');
require('./viewhelpers');

Snackbar.prototype.init = function(model) {
  this.globalOptions = this.getAttribute('options');

  model.set('queue', []);
};
