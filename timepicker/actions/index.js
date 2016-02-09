var Timepicker = require('./../index');

Timepicker.prototype.show = Timepicker.prototype._show;
Timepicker.prototype.hide = Timepicker.prototype._hide;
Timepicker.prototype.addCloseListener = Timepicker.prototype._addCloseListener;
Timepicker.prototype.removeCloseListener = Timepicker.prototype._removeCloseListener;
Timepicker.prototype.selectView = Timepicker.prototype._selectView;

Timepicker.prototype.setValue = Timepicker.prototype._setValue;

Timepicker.prototype.selectHour = Timepicker.prototype._selectHour;
Timepicker.prototype.selectMinute = Timepicker.prototype._selectMinute;

Timepicker.prototype.getDegString = Timepicker.prototype._getDegString;
