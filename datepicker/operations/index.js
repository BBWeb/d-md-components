var Datepicker = require('./../index');

Datepicker.prototype._showView = function(view) {
  if (this.model.get('activeView') === view) return;

  this.model.set('activeView', view);

  if (view === 'day') this._setMonthMinHeight(this.model.get('isMonthViewOne') ? 0 : 1);
  if (view === 'year') this._scrollToSelected(this.$yearlist);
  if (view === 'month') this._scrollToSelected(this.$monthlist);
};

Datepicker.prototype._selectDate = function(day) {
  if (day.date !== this.model.get('selectedDate')) this._animateText('date', this.model.getCopy('selectedDate'));

  this.model.set('selectedDate', day.date);
};

Datepicker.prototype._selectYear = function(year) {
  if (year !== this.model.get('selectedYear')) this._animateText('year', this.model.getCopy('selectedYear'));

  this.model.set('selectedYear', year);

  // REVIEW: center on selection or only on view load?
  this._scrollToSelected(this.$yearlist);
};

Datepicker.prototype._selectMonth = function(month) {
  this.model.set('selectedMonth', month);
  
  // REVIEW: center on selection or only on view load?
  this._scrollToSelected(this.$monthlist);

  // REVIEW: close month on selection or have to click date
};

Datepicker.prototype._animateText = function(text, oldText) {
  this.model.set('leaving.' + text, oldText);
  this.model.set('animating.' + text, true);
  // Force style recalculation for transitions to work. See http://stackoverflow.com/questions/18564942/clean-way-to-programmatically-use-css-transitions-from-js/31862081
  window.getComputedStyle(this.$header).top;
  console.log(this.model.get('animating'));
  this.model.del('animating.' + text);
};

Datepicker.prototype._scrollToSelected = function($list) {
  var $item = $list.querySelector('.pickerlist---item--selected');

  $list.scrollTop = ($item.offsetTop) - (($list.clientHeight / 2) - ($item.clientHeight / 2));
};

Datepicker.prototype._flipMonth = function(direction) {
  this._animateText('month', this.model.getCopy('selectedMonth'));

  // Figure out which view is entering/leaving.
  var isFirstActive = this.model.set('isMonthViewOne', !this.model.get('isMonthViewOne'));
  var entering = (isFirstActive) ? 'monthTwo' : 'monthOne';
  var leaving = (!isFirstActive) ? 'monthTwo' : 'monthOne';
  var to = (direction === 'right') ? 'left' : 'right';

  // Add next/prev month to entering view.
  var enteringMonth = this.getMonth(); // TODO: Monthbuilder.
  this.model.set(entering, enteringMonth.weeks);
  this.model.set('selectedMonth', enteringMonth.name);
  
  // Set class to entering view so it repositions to correct location.
  this.model.set(entering + 'PositionClass', 'days---dates--' + direction + ' no-transition');

  // Set maxHeight on month container so it animates. This is a good place to do this since setting min-height
  // will also force a redrawing - giving time to position entering class without transition.
  var enteringChildIndex = (isFirstActive) ? 1 : 0;
  this._setMonthMinHeight(enteringChildIndex);

  // Set entering view to active and leaving views to-direction to animate slide.
  this.model.set(entering + 'PositionClass', 'days---dates--active');
  this.model.set(leaving + 'PositionClass', 'days---dates--' + to);
};

Datepicker.prototype._setMonthMinHeight = function (childIndex) {
  var children = this.$months.childNodes;
  var childHeight = children[childIndex].offsetHeight;

  this.$months.style.minHeight = childHeight + 'px';
};
