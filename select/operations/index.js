var Select = require('./../index');

Select.prototype._select = function(option, index) {
  this.model.set('value', option[this.key]);
  this.model.set('selected', option);
  this.model.set('selectedIndex', index);
  this._closeOptions();
};

Select.prototype._willSelect = function() {  
  this.model.set('selectOptionsVisible', true);
};

Select.prototype._adjustDropdown = function(index) {
  var ul = this.optionListDropdown;
  
  if (index > 2) {
    index = index - 2;
    ul.scrollTop = (index * 40);
  } else {
    ul.scrollTop = 0;
  }
};

Select.prototype._addCloseListener = function () {
  var self = this;
  var lastIndex = this.optionListDropdown.children.length - 1;
  this.model.set('focusedIndex', this.model.get('selectedIndex'));

  this.focusListener = function (e) {
    if (e.target !== self.outputField) self._closeOptions();
  };

  this.clickListener = function (e) {
    if (!self.optionListDropdown.contains(e.target)) self._closeOptions();
  };

  this.keyListener = function (e) {
    if (e.keyCode === 27) return self._closeOptions();

    if (e.keyCode === 13) {
      e.stopPropagation();
      var index = self.model.get('focusedIndex');
      var option = self.model.get('optionList.' + index);

      self._validate();
      return self._select(option, index);
    }

    if ((e.keyCode === 37 || e.keyCode === 38) && 
        self.model.get('focusedIndex') > 0) return self._adjustDropdown(self.model.increment('focusedIndex', -1));

    if ((e.keyCode === 39 || e.keyCode === 40) && 
        self.model.get('focusedIndex') < lastIndex) return self._adjustDropdown(self.model.increment('focusedIndex'));

  };

  document.body.addEventListener('focusin', this.focusListener);
  document.body.addEventListener('mouseup', this.clickListener);
  document.body.addEventListener('keydown', this.keyListener);
};

Select.prototype._removeCloseListener = function() {
  document.body.removeEventListener('focusin', this.focusListener);
  document.body.removeEventListener('mouseup', this.clickListener);
  document.body.removeEventListener('keydown', this.keyListener);
};

Select.prototype._validate = function () {
  if(this.validator) { 
    var field = this.model.get('validator.' + this.fieldName);
    if (typeof field.validate === 'function') field.validate();
  }
};

Select.prototype._closeOptions = function () {
  this.model.set('selectOptionsVisible', false);
};
