var Dialog = require('./../index');

/**
 * Show the dialog.
 * 
 * @param {Event} [e] - Animates from click coordinates if this argument is provided.
 */
Dialog.prototype.show = Dialog.prototype._show;

/**
 * Emits a cancellable event and hides the dialog if it isn't cancelled by a listener. Triggered by all 
 * actionbuttons in the component.
 */
Dialog.prototype.maybeHide = Dialog.prototype._maybeHide;

/**
 * Hides the dialog.
 */
Dialog.prototype.hide = Dialog.prototype._hide;

/**
 * May hide the dialog if options.overlay.clickToHide is true. Calls maybeHide() with optional action. 
 * Default action is 'overlay'.
 */
Dialog.prototype.overlayClicked = Dialog.prototype._maybeHideByOverlay;
