module.exports = Snackbar;

function Snackbar() {}

Snackbar.prototype.view = __dirname + '/views';
Snackbar.prototype.style = __dirname + '/styles';
Snackbar.prototype.name = 'snackbar';
Snackbar.prototype.components = [];

require('./operations');
require('./actions');
require('./viewhelpers');

Snackbar.prototype.init = function(model) {
  model.set('queue', []);
};
