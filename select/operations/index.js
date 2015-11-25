var Select = require('./../index');

Select.prototype.select = function(option, index) {
  this.model.set('value', option[this.key]);
  this.model.set('selected', option);
  this.model.set('selectedIndex', index);
  this.model.set('selectOptionsVisible', false);
};

Select.prototype.willSelect = function(el) {
  var ul = this.optionListDropdown;
  var index = this.model.get('selectedIndex');
  
  this.model.set('selectOptionsVisible', true);

  if (index > 2) {
    index = index - 2;
    ul.scrollTop = (index * 40);
  } else {
    ul.scrollTop = 0;
  }

  this.addCloseListener();
};

Select.prototype.addCloseListener = function () {
  var self = this;

  var listener = function (e) {
    if (!self.optionListDropdown.contains(e.target)) {
      self.model.set('selectOptionsVisible', false);
    };

    document.body.removeEventListener('mouseup', listener);
  }

  document.body.addEventListener('mouseup', listener);
}

