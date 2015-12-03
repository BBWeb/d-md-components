var Overlay = require('./../index');

/**
 * Emits a 'click' event. May hide the overlay, if specified in options
 */
Overlay.prototype.click = function () {
  this.emit('click');
  this._maybeHide();
};

/**
 * Shows the overlay
 * Emits the 'show' and 'shown' events
 */
Overlay.prototype.show = Overlay.prototype._show;

/**
 * Hides the overlay.
 * Emits the 'hide' and 'hidden' events
 */
Overlay.prototype.hide = Overlay.prototype._hide;
