var Progress = require('./../index');

Progress.prototype._show = function() {
  this.model.set('loading', true);
};

Progress.prototype._hide = function() {
  this.model.set('loading', false);
};
