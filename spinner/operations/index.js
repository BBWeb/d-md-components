var Spinner = require('./../index');

Spinner.prototype.show = function() {
  this.model.set('spinning', true);
};

Spinner.prototype.hide = function() {
  this.model.set('spinning', false);
};
