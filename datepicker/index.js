module.exports = Snackbar;

/**
 * Creates a datepicker component.
 */
function Datepicker() {}

Datepicker.prototype.view = __dirname + '/views';
Datepicker.prototype.style = __dirname + '/styles';
Datepicker.prototype.name = 'datepicker';
Datepicker.prototype.components = [];

require('./operations');
require('./actions');
