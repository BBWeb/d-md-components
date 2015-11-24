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
};

Tabs.prototype.create = function(model) {
  var selectedIndex = this.getAttribute('selectedTab') || 0;
  var componentId = model.get('id');
  var el = document.getElementById(componentId + '-tab-header-' + selectedIndex);

  if (el) this._setTabUnderline(el);
};
