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
    for (var i = 0; i < optionList.length; i++) {
      if (optionList[i][this.key] === currentValue) this.select(optionList[i], i);
    };
  };

  var self = this;
  model.on('all', 'optionList**', function (captures, event, optionList) {
    var selected = self.getAttribute('value');
    var inList = false;
    
    for (var i = 0; i < optionList.length; i++) {
      if (optionList[i][self.key] === selected) {
        inList = true;
      };
    };
    
    if (!inList) self.select({}, undefined);
  });
};
