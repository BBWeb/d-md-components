var Timepicker = require('./../index');

Timepicker.prototype._show = function() {
  this.emit('show');

  this._selectView('hour');

  this.model.set('show', true);
};

Timepicker.prototype._hide = function() {
  var self = this;
  this.emit('hide');

  this.model.set('hiding', true);
  setTimeout(function hideWhenFaded() {
    self.model.setEach({
      show: false,
      hiding: false
    });
  }, 300);
};

Timepicker.prototype._addCloseListener = function () {
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

Timepicker.prototype._removeCloseListener = function () {
  document.body.removeEventListener('mouseup', this.clickHandler);
  document.body.removeEventListener('keyup', this.keyupHandler);
};

Timepicker.prototype._selectView = function(view) {
  this.model.set('activeView', view);
};

Timepicker.prototype._selectHour = function(hour) {  
  this.model.setEach({ 
    activeHour: hour,
    activeView: 'minute'
  });
};

Timepicker.prototype._selectMinute = function(minute) {  
  this.model.set('activeMinute', minute);
};

Timepicker.prototype._setValue = function() {
  this.model.set('value', this.padNumber(this.model.get('activeHour')) + ':' + this.padNumber(this.model.get('activeMinute')));

  this.emit('selected', this.model.get('value'));
};

Timepicker.prototype._getDegString = function(numbers, index, inner) {
  var edge = (inner) ? 82 : 124;
  var degLength = 360 / numbers;
  var rotateDeg = (index + 1) * degLength;
  var rotateBackDeg = -rotateDeg + 90;

  // Chain transforms. All numbers are stacked in the middle of the circle, we rotate to 
  // their position on the circle, push them to the edge and then rotate back. The reason for the
  // +90 on the back turn is that the whole circle is rotated -90 to place the 0 top instead of to the right.
  return 'rotate(' + rotateDeg + 'deg) translate(' + edge + 'px) rotate(' + rotateBackDeg + 'deg)';
};

