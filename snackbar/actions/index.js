var Snackbar = require('./../index');

/**
 * Adds a toast message to the snackbar queue.
 * @param {String} message - The toast message, has to be short ~60 characters depending on button text.
 * @param {String} [button] - The button text. If this argument is passed, the buttonFn argument needs to be passed as well.
 * @param {Function} [buttonFn] - A function to run when button is pressed.
 * @param {Object} [options] - An options object.
   * @param {Number} [options.timeShowing] - Time in ms to show the toast, default 3800.
   * @param {String} [options.buttonClass] - A class name if you want to style the button text (ex. material design accent color). Default is white.
 */
Snackbar.prototype.add = Snackbar.prototype._addToQueue;

/**
 * Forces the next toast in the queue to show.
 */
Snackbar.prototype.next = function () {
  this._showNext(true);
};

/** 
 * Force the currently showing snackbar to close. 
 */
Snackbar.prototype.close = Snackbar.prototype._close;

Snackbar.prototype.buttonClick = function () {
  if(this.buttonFn) this.buttonFn.apply(this, arguments);
};
