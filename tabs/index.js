var DerbyElList = require('derby-el-list');

module.exports = Tabs;

function Tabs() {}

Tabs.prototype.view = __dirname + '/views';
Tabs.prototype.style = __dirname + '/styles';
Tabs.prototype.name = 'tabs';
Tabs.prototype.components = [];

require('./operations');
require('./actions');

Tabs.prototype.init = function(model) {
  var tabs = this.getAttribute('tab');
  var selectedIndex = this.getAttribute('selectedTab') || 0;

  if (tabs) {
    this._assignPositions(tabs);
    this.model.set('selectedTab', selectedIndex);
  }

  this.tabHeaders = new DerbyElList();
  this.tabContents = new DerbyElList();
};

Tabs.prototype.create = function(model) {
  var selectedIndex = this.getAttribute('selectedTab') || 0;

  this._setTabUnderline(selectedIndex);
};
