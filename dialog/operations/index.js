var Dialog = require('./../index');
var _ = require('lodash');

Dialog.prototype._show = function(e) {
  this.model.del('origin');

  // Save params so we can return them in emit.
  var args = Array.prototype.slice.call(arguments);

  // Animate from click if event is passed
  if (e && typeof e.pageX === 'number') {
    args.shift();
    this.model.setEach('origin', { x: e.pageX, y: e.pageY });
  }

  this.params = args;

  var self = this;
  this._maybeShowOverlay();
  this.model.set('animating', true);
  _.delay(function () {
    self.model.set('show', true);
  }, 100);
};

Dialog.prototype._maybeHide = function(action) {
  var args = ['hide'].concat(action, this.params);
  var cancelled = this.emitCancellable.apply(this, args);
  if (cancelled) return;

  this._hide();
};

Dialog.prototype._hide = function() {
  var self = this;

  this._maybeHideOverlay();
  this.model.set('show', false);
  _.delay(function () {
    self.model.set('animating', false);
  }, 300);
};

Dialog.prototype._maybeHideByOverlay = function () {
  var opts = this.getAttribute('options');
  if (opts && opts.overlay && opts.overlay.clickToHide) {
    this._maybeHide(opts.overlay.closeAction || 'overlay');
  }
};

Dialog.prototype._maybeShowOverlay = function () {
  var opts = this.getAttribute('options');
  if (opts && opts.overlay) {
    this.overlay.show();
  }
};

Dialog.prototype._maybeHideOverlay = function () {
  var opts = this.getAttribute('options');
  if (opts && opts.overlay) {
    this.overlay.hide();
  }
};
