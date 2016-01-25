var _ = require('lodash');

module.exports = Select;

function Select() {}

Select.prototype.view = __dirname + '/views';
Select.prototype.style = __dirname + '/styles';
Select.prototype.name = 'select';
Select.prototype.components = [];

require('./operations');
require('./actions');

Select.prototype.init = function(model) {
  var optionList = this.getAttribute('optionList');
  var currentValue = this.getAttribute('value');
  this.key = this.getAttribute('key');

  if (currentValue) {
    for (var i = 0, len = optionList.length; i < len; i++) {
      if (optionList[i][this.key] === currentValue) this._select(optionList[i], i);
    };
  };

  var self = this;
  // If the optionsLists changes and the value isn't in the new list, this will deselect.
  model.on('all', 'optionList**', function (captures, event, optionList) {    
    if(!_.some(optionList, self.key, self.getAttribute('value'))) self._select({}, 0);    
  });

  this.validator = this.getAttribute('validator');

  if (this.validator) {
    this.fieldName = this.getAttribute('fieldName');
    
    var value = model.at('validator.' + this.fieldName + '.value');
    var isInvalid = model.at('validator.' + this.fieldName + '.isInvalid');
    var errorMsg = model.at('validator.' + this.fieldName + '.messages.0');

    model.ref('value', value);
    model.ref('invalid', isInvalid);
    model.ref('invalidMessage', errorMsg);
  }
};
