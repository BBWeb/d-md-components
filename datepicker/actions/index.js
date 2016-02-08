var Datepicker = require('./../index');

Datepicker.prototype.show = Datepicker.prototype._show;
Datepicker.prototype.hide = Datepicker.prototype._hide;
Datepicker.prototype.addCloseListener = Datepicker.prototype._addCloseListener;
Datepicker.prototype.removeCloseListener = Datepicker.prototype._removeCloseListener;

Datepicker.prototype.selectDate = Datepicker.prototype._selectDate;
Datepicker.prototype.selectYear = Datepicker.prototype._selectYear;
Datepicker.prototype.selectMonth = Datepicker.prototype._selectMonth;

Datepicker.prototype.showView = function(view) {
  this._showView(view);

  switch (view) {
    case 'day':
      this._setMonthMinHeight();
      break;
    case 'year':
      this._scrollToSelected(this.$yearlist);
      break;
    case 'month':
      this._scrollToSelected(this.$monthlist);
      break;
  }
};

Datepicker.prototype.nextMonth = function () {
  this._flipMonth('right', this._getNextMonth(this.model.get('currentDate')));
};
Datepicker.prototype.previousMonth = function () {
  this._flipMonth('left', this._getPreviousMonth(this.model.get('currentDate')));
};

Datepicker.prototype.setValue = Datepicker.prototype._setValue;
