var Datepicker = require('./../index');

Datepicker.prototype._flipMonth = function(direction) {
  // Figure out which view is entering/leaving.
  var isFirstActive = this.model.set('firstViewActive', !this.model.get('firstViewActive'));
  var entering = (isFirstActive) ? 'monthTwo' : 'monthOne';
  var leaving = (!isFirstActive) ? 'monthTwo' : 'monthOne';
  var to = (direction === 'right') ? 'left' : 'right';

  // Add next/prev month to entering view.
  var enteringMonth = this.getMonth(); // TODO: Monthbuilder.
  this.model.set(entering, enteringMonth.weeks);
  this.model.set('month', enteringMonth.name);
  
  // Set class to entering view so it repositions to correct location.
  this.model.set(entering + 'PositionClass', 'days---dates--' + direction + ' no-transition');

  // Set maxHeight on month container so it animates. This is a good place to do this since setting min-height
  // will also force a redrawing - giving time to position entering class without transition.
  this.setMonthMinHeight(isFirstActive);

  // Set entering view to active and leaving views to-direction to animate slide.
  this.model.set(entering + 'PositionClass', 'days---dates--active');
  this.model.set(leaving + 'PositionClass', 'days---dates--' + to);
};

Datepicker.prototype.setMonthMinHeight = function (isFirstChild) {
  var enteringChildIndex = (isFirstChild) ? 1 : 0;
  var children = this.$months.childNodes;
  var enteringHeight = children[enteringChildIndex].offsetHeight;

  this.$months.style.minHeight = enteringHeight + 'px';
};
