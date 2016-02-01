var Datepicker = require('./../index');

Datepicker.prototype.show = Datepicker.prototype._show;
Datepicker.prototype.addCloseListener = Datepicker.prototype._addCloseListener;
Datepicker.prototype.removeCloseListener = Datepicker.prototype._removeCloseListener;

Datepicker.prototype.selectDate = Datepicker.prototype._selectDate;
Datepicker.prototype.selectYear = Datepicker.prototype._selectYear;
Datepicker.prototype.selectMonth = Datepicker.prototype._selectMonth;

Datepicker.prototype.showView = Datepicker.prototype._showView;

Datepicker.prototype.flipMonth = Datepicker.prototype._flipMonth;
