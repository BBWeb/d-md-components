module.exports = Progress;

/**
 * A component for mdl-styled progressbars.
 *
 * @param {Model} [loading] - A model variable deciding if the progressbar is showing/animating or not.
 * @param {String} [class]  - An extra class to add to the component.
 * @param {String} [accent] - A css color string to paint the progress bar. Default is mdl blue.
 */
function Progress() {}

Progress.prototype.view = __dirname + '/views';
Progress.prototype.style = __dirname + '/styles';
Progress.prototype.name = 'progress';

require('./operations');
require('./actions');

Progress.prototype.init = function(model) {  
  model.start('showing', 'loading', function (loading) {
    return loading;
  });
};
