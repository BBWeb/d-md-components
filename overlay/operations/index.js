var Overlay = require('./../index');

Overlay.prototype._show = function () {
  this.emit('show');
  this.model.set('show', true);
  this.emit('shown');
};

Overlay.prototype._hide = function () {
  this.emit('hide');
  this.model.set('show', false);
  this.emit('hidden');
};

Overlay.prototype._maybeHide = function () {
  var opts = this.getAttribute('options');
  if (opts && opts.autohide) {
    this.hide();
  }
};
