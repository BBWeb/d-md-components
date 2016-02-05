module.exports = Textfield;

function Textfield() {}

Textfield.prototype.view = __dirname + '/views';
Textfield.prototype.style = __dirname + '/styles';
Textfield.prototype.name = 'textfield';
Textfield.prototype.components = [];

require('./operations');
require('./actions');
require('./viewhelpers');

Textfield.prototype.init = function(model) {
  this.validator = this.getAttribute('validator');

  if(this.validator) {
    this.fieldName = this.getAttribute('fieldName');
    
    var value = model.at('validator.' + this.fieldName + '.value');
    var isInvalid = model.at('validator.' + this.fieldName + '.isInvalid');
    var errorMsg = model.at('validator.' + this.fieldName + '.messages.0');

    model.ref('value', value);
    model.ref('invalid', isInvalid);
    model.ref('invalidMessage', errorMsg);
  }
};
