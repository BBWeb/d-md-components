var Checkbox = require('./../index');

Checkbox.prototype.click = function(event) {
  this._triggerAnimation(event);

};

Checkbox.prototype.mouseUp = function() {
  this._removeAnimation();

  if(this.groupHeader) this._checkSubgroupCheckboxes();
};
