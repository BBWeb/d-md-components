var Snackbar = require('./../index');

Snackbar.prototype.add = Snackbar.prototype._addToQueue;

Snackbar.prototype.buttonClick = function () {
  if(this.buttonFn) this.buttonFn.apply(this, arguments);
};

Snackbar.prototype.next = function () {
  this._showNext(true);
};

Snackbar.prototype.close = Snackbar.prototype._close;
