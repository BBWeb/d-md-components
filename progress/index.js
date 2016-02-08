module.exports = Progress;

/**
 * A component for mdl-styled progressbars.
 *
 * @param {String} [class]  - An extra class to add to the component.
 * @param {String} [accent] - A css color string to paint the progress bar. Default is mdl blue.
 */
function Progress() {}

Progress.prototype.view = __dirname + '/views';
Progress.prototype.style = __dirname + '/styles';
Progress.prototype.name = 'progress';

require('./operations');
require('./actions');
