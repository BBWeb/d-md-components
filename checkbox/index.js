module.exports = Checkbox;

function Checkbox() {}

Checkbox.prototype.view = __dirname + '/views';
Checkbox.prototype.style = __dirname + '/styles';
Checkbox.prototype.name = 'checkbox';
Checkbox.prototype.components = [];

require('./operations');
require('./actions');

Checkbox.prototype.init = function(model) {
  this.groupHeader = this.getAttribute('groupHeader');
  
  var self = this;
  if(this.groupHeader) {
    model.start('undecided', 'group', function (group) {
      var checked = false;
      var unchecked = false;
      Array.prototype.forEach.call(group, function(item, index) {
        if(item[self.groupHeader]) {
          checked = true;
        } else {
          unchecked = true;
        }
      });

      var undecided = (checked === unchecked);

      if(!undecided) {
        setTimeout(function() {
          self.model.set('checked', checked);
        }, 1);
      }

      return undecided;
    });
  }
};
