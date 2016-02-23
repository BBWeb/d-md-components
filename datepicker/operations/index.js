var moment = require('moment/min/moment-with-locales.min');
var Datepicker = require('./../index');

Datepicker.prototype._showView = function(view) {
  if (this.model.get('activeView') === view) return;

  this.model.set('activeView', view);
};

Datepicker.prototype._selectDate = function(momentDate, closeOnSelect) {
  if (this._isOutOfRange(momentDate)) return;

  var selectedDate = this.model.get('selectedDate');

  if (!momentDate.isSame(selectedDate, 'day')) {
    this._animateText('date', selectedDate);
    if (!momentDate.isSame(selectedDate, 'year')) this._animateText('year', selectedDate);
  }

  this.model.set('selectedDate', momentDate);

  if (closeOnSelect) {
    this.setValue();
    this._hide();
  }
};

Datepicker.prototype.action = function(action) {
  this.emit('action', action.text || action, this.caller);

  if (action.disableDismiss) return;

  this._hide();
};

Datepicker.prototype._selectYear = function(year) {
  var momentDate = this.model.get('selectedDate').clone();
  momentDate.year(year);

  this._selectDate(momentDate);
  this._setCurrentDate(momentDate);
  
  // REVIEW: center on selection or only on view load?
  this._scrollToSelected(this.$yearlist);
  this._maybeHideList();
};

Datepicker.prototype._selectMonth = function(monthIndex) {
  var date = this.model.get('currentDate').clone();
  date.month(monthIndex);

  this._setCurrentDate(date);  
  // REVIEW: center on selection or only on view load?
  this._scrollToSelected(this.$monthlist);
  this._maybeHideList();
};

Datepicker.prototype._maybeHideList = function() {
  var options = this.getAttribute('options');

  if (!options || !options.disableAutoCloseLists) {
    this._showView('day');
    this._flipMonth('right', this._getMonth(this.model.get('currentDate')));
  }
};

Datepicker.prototype._animateText = function(text, date) {
  this.model.set('leaving.' + text, date);
  this.model.set('animating.' + text, true);
  // Force style recalculation for transitions to work. See http://stackoverflow.com/questions/18564942/clean-way-to-programmatically-use-css-transitions-from-js/31862081
  window.getComputedStyle(this.$datepicker).top;
  this.model.del('animating.' + text);
};

Datepicker.prototype._scrollToSelected = function($list) {
  var $item = $list.querySelector('.pickerlist---item--selected');

  if (!$item) return;

  $list.scrollTop = ($item.offsetTop) - (($list.clientHeight / 2) - ($item.clientHeight / 2));
};

Datepicker.prototype._flipMonth = function(direction, newMonth) {
  var currentDate = this.model.get('currentDate').clone();
  this._animateText('month', currentDate);

  // Figure out which view is entering/leaving.
  var isFirstActive = this.model.set('isMonthViewOne', !this.model.get('isMonthViewOne'));
  var entering = (isFirstActive) ? 'monthTwo' : 'monthOne';
  var leaving = (!isFirstActive) ? 'monthTwo' : 'monthOne';
  var to = (direction === 'right') ? 'left' : 'right';

  // Add next/prev month to entering view.
  this.model.set(entering, newMonth);

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
  window.getComputedStyle(this.$datepicker).top;

  if (!childIndex) childIndex = this.model.get('isMonthViewOne') ? 0 : 1;

  var children = this.$months.childNodes;
  var childHeight = children[childIndex].offsetHeight;

  this.$months.style.minHeight = childHeight + 'px';
};

Datepicker.prototype._show = function(caller) {
  if (this.model.get('show')) return;
  
  this.caller = caller;
  this.emit('show', caller);

  this._initDates();

  this.model.setEach({ 
    show: true,
    activeView: 'day'
  });

  this._setMonthMinHeight();
};

Datepicker.prototype._hide = function() {
  var self = this;

  this.emit('hide', this.caller);

  this.model.set('hiding', true);
  setTimeout(function hideWhenFaded() {
    self.model.setEach({
      show: false,
      hiding: false
    });
  }, 300);
};

Datepicker.prototype._addCloseListener = function () {
  var self = this;

  this.clickHandler = function (e) {
    if (!self.$datepicker.contains(e.target)) {
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

Datepicker.prototype._setCurrentDate = function(momentDate) {
  this.model.set('currentDate', momentDate.clone());
};

Datepicker.prototype._setValue = function() {
  var selectedValue = this.model.get('selectedDate').format();

  this.model.set('value', selectedValue);
  this.emit('selected', selectedValue, this.caller);
};

Datepicker.prototype._isOutOfRange = function(momentDate) {
  var minDate = this.model.get('minDate');
  var maxDate = this.model.get('maxDate');

  return !momentDate.isBetween(minDate, maxDate);
};

Datepicker.prototype._initDates = function() {
  var input = this.getAttribute('value');
  var today = moment();
  var initialDate = moment(input);
  var selectedDate = initialDate.isValid() ? initialDate : today.clone();
  var currentDate = selectedDate.clone();
  var month = this._getMonth(selectedDate);

  this.model.setEach({
    selectedDate: selectedDate,
    currentDate: currentDate,
    today: today
  });

  var monthView = this.model.get('isMonthViewOne') ? 'monthOne' : 'monthTwo';

  this.model.set(monthView, month);
};
