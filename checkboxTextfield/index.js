module.exports = CheckboxTextfield;

function CheckboxTextfield() {}

CheckboxTextfield.prototype.view = __dirname + '/views';
CheckboxTextfield.prototype.style = __dirname + '/styles';
CheckboxTextfield.prototype.name = 'checkboxTextfield';
CheckboxTextfield.prototype.components = [  
  require('./../textfield'),
  require('./../checkbox')
];

require('./operations');
require('./actions');

CheckboxTextfield.prototype.init = function(model) {
  var self = this;

  model.on('change', 'value', function (isDirty) {
    if (isDirty) model.set('checked', true);
  });

  model.start('disabled', 'checked', function (checked) {
    if (model.get('value')) return !checked;

    return false;
  });
};
