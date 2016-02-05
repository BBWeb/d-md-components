var Textfield = require('./../index');

Textfield.prototype._toggleFocus = function () {
  this._removeInvalid();
  this.model.set('isFocused', !this.model.get('isFocused'));
};

Textfield.prototype._validate = function () {
  if(this.validator && typeof this.validator[this.fieldName].validate === 'function') {
    this.validator[this.fieldName].validate();
  }
};

Textfield.prototype._removeInvalid = function () {
  this.model.set('invalid', false);
};

Textfield.prototype._maybeExpand = function () {
  var textareaOptions = this.getAttribute('textarea');

  if (textareaOptions && textareaOptions.disableAutoResize) return;

  var el = this.textarea;
  el.style.height = 'auto';
  el.style.height = el.scrollHeight ? el.scrollHeight + 'px' : 'auto';
};
