var Spinner = require('./../index');

Spinner.prototype._show = function() {
  this.model.set('spinning', true);
};

Spinner.prototype._hide = function() {
  this.model.set('spinning', false);
};
