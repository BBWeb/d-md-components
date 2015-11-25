var Checkbox = require('./../index');

/**
 * Animates a circle ripple behind checkbox when pressed and held.
 * @param  {Event} event that started ripple animation.
 */
Checkbox.prototype._triggerAnimation = function (event) {
  this.model.set('visible', true);

  this.frameCount_ = 1;
  var bound = event.currentTarget.lastChild.getBoundingClientRect();
  var x;
  var y;

  x = Math.round(event.clientX - bound.left);
  y = Math.round(event.clientY - bound.top);

  this._setRippleXY(x, y);
  this._setRippleStyles(true);

  window.requestAnimationFrame(this._animationFrameHandler.bind(this));
};

/**
 * Remove ripple circle.
 */
Checkbox.prototype._removeAnimation = function () {
  this.model.set('visible', false);
}

/**
 * Handles an animation frame.
 */
Checkbox.prototype._animationFrameHandler = function () {
  if (this.frameCount_-- > 0) {
      window.requestAnimationFrame(this._animationFrameHandler.bind(this));
  } else {
      this._setRippleStyles(false);
  }
};

/**
 * Sets the ripple X and Y coordinates.
 * @param  {number} newX the new X coordinate
 * @param  {number} newY the new Y coordinate
 */
Checkbox.prototype._setRippleXY = function (newX, newY) {
  this.x_ = newX;
  this.y_ = newY;
};

/**
 * Sets the ripple styles.
 * @param  {boolean} start whether or not this is the start frame.
 */
Checkbox.prototype._setRippleStyles = function (start) {
  var transformString;
  var scale;
  var size;
  var offset = 'translate(' + this.x_ + 'px, ' + this.y_ + 'px) ';
  if (start) {
      scale = 'scale(0.0001, 0.0001)';
      size = '1px';
  } else {
      scale = '';
      size = 103.823 + 'px';
      offset = 'translate(18px, 18px) ';
  }
  transformString = 'translate(-50%, -50%) ' + offset + scale;
  this.model.set('transformString', transformString);

  if (start) {
    this.model.set('animating', false);
  } else {
    this.model.set('animating', true);
  }
};

Checkbox.prototype._checkSubgroupCheckboxes = function() {
  var self = this;
  var checked = self.model.get('checked');

  Array.prototype.forEach.call(this.model.get('group'), function(item, index) {
    self.model.set('group.' + index + '.' + self.groupHeader, !checked);
  });
};
