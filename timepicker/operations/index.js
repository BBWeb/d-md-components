var Datepicker = require('./../index');

Datepicker.prototype._show = function() {
  this.emit('show');

  // TODO: Implement
};

Datepicker.prototype._hide = function() {
  this.emit('hide');

  // TODO: Implement
};

Datepicker.prototype._addCloseListener = function () {
  var self = this;

  this.clickHandler = function (e) {
    if (!self.$timepicker.contains(e.target)) {
      self._hide();
    }
  };

  this.keyupHandler = function (e) {
    if (e.keyCode === 27) self._hide();
  };

  document.body.addEventListener('mouseup', this.clickHandler);
  document.body.addEventListener('keyup', this.keyupHandler);
};

Datepicker.prototype._removeCloseListener = function () {
  document.body.removeEventListener('mouseup', this.clickHandler);
  document.body.removeEventListener('keyup', this.keyupHandler);
};

Datepicker.prototype._setValue = function() {
  // TODO: Implement
};
