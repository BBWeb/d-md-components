module.exports = Progress;

/**
 * A component for mdl-styled progressbars.
 */
function Progress() {}

Progress.prototype.view = __dirname + '/views';
Progress.prototype.style = __dirname + '/styles';
Progress.prototype.name = 'progress';

require('./operations');
require('./actions');
