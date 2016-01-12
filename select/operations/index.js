var Select = require('./../index');

Select.prototype._select = function(option, index) {
  this.model.set('value', option[this.key]);
  this.model.set('selected', option);
  this.model.set('selectedIndex', index);
  this.model.set('selectOptionsVisible', false);
};

Select.prototype._willSelect = function() {  
  this.model.set('selectOptionsVisible', true);
};

Select.prototype._adjustDropdown = function() {
  var index = this.model.get('selectedIndex');
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

  this.listener = function (e) {
    if (!self.optionListDropdown.contains(e.target)) {
      self.model.set('selectOptionsVisible', false);
    };
  }

  document.body.addEventListener('mouseup', this.listener);
};

Select.prototype._removeCloseListener = function() {
  document.body.removeEventListener('mouseup', this.listener);
};

Select.prototype._validate = function () {
  if(this.validator && typeof this.validator[this.fieldName].validate === 'function') {
    this.validator[this.fieldName].validate();
  }
};
