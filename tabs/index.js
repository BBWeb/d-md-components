module.exports = Tabs;

function Tabs() {}

Tabs.prototype.view = __dirname + '/views';
Tabs.prototype.style = __dirname + '/styles';
Tabs.prototype.name = 'tabs';
Tabs.prototype.components = [];

require('./operations');
require('./actions');

Tabs.prototype.init = function(model) {
  var tabs = this.getAttribute('tab')

  if (tabs) this._assignPositions(tabs);
}


Tabs.prototype.create = function(model) {
  var index = this.getAttribute('selectedTab') || 0;
  var el = document.getElementById('tab-header-' + index);

  if (el) this._selectTab(index, el);
};
