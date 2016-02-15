var Progress = require('./../index');

Progress.prototype._show = function() {
  this.model.set('loading', true);
};

Progress.prototype._hide = function() {
  this.model.set('showing', false);
  
  // Give container time to transition shrink before removing elements.
  var self = this;
  setTimeout(function () {
    self.model.del('loading');
  }, 200);
};
