module.exports = Overlay;

/**
 * A component which displays a semi-transparent overlay over all or a portion of the screen
 *
 * @fires Overlay#click  - Fired when a user clicks on the overlay
 * @fires Overlay#hide   - Fired when the overlay is about to be hidden
 * @fires Overlay#hidden - Fired when the overlay has been hidden
 * @fires Overlay#show   - Fired when the overlay is about to be shown
 * @fires Overlay#shown  - Fired when the overlay has been shown
 *
 * @param {number}  [zIndex]                 - A specific z-index to give to this overlay
 * @param {object}  [options]                - an options object
 * @param {boolean} [options.autohide=false] - whether the overlay should automatically hide when clicked or not
 * @param {string}  [options.class]          - a CSS class to add to the overlay's div element
 */
function Overlay() {}

Overlay.prototype.view = __dirname + '/views';
Overlay.prototype.style = __dirname + '/styles';
Overlay.prototype.name = 'overlay';

require('./operations');
require('./actions');
require('./viewhelpers');
