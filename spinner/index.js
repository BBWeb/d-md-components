module.exports = Spinner;

/**
 * A component wrapping the single-colored spinner from mdl in derby.
 * 
 * @param {String} [accent] - A css color string to paint the spinner. Default color is mdl blue.
 */
function Spinner() {}

Spinner.prototype.view = __dirname + '/views';
Spinner.prototype.style = __dirname + '/styles';
Spinner.prototype.name = 'spinner';

require('./operations');
require('./actions');
