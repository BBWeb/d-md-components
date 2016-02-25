var DerbyElList = require('derby-el-list');
var _ = require('lodash');

module.exports = Tabs;

function Tabs() {}

Tabs.prototype.view = __dirname + '/views';
Tabs.prototype.style = __dirname + '/styles';
Tabs.prototype.name = 'tabs';
Tabs.prototype.components = [];

require('./operations');
require('./actions');

Tabs.prototype.init = function(model) {
  var self = this;
  var tabs = this.getAttribute('tab');
  var selectedIndex = this.getAttribute('selectedTab') || 0;

  if (tabs) {
    this._assignPositions(tabs);
    this.model.set('selectedTab', selectedIndex);

    _.each(tabs, function (tab, index) {
      if(tab.hasOwnProperty('hide')) {
        var context = self.parent.context;
        var attribute = model.get('tab.' + index + '.hide');
        var segments = (
          attribute.expression &&
          attribute.expression.pathSegments(context)
        );
        if (segments) {
          model.scope('').ref(model._at + '.tabs.' + index + '.hide', segments.join('.'), {updateIndices: true});
        } else {
          model.set('tabs.' + index + '.hide', tab.hide);
        }
      }
    });
  }

  this.tabHeaders = new DerbyElList();
  this.tabContents = new DerbyElList();
};

Tabs.prototype.create = function(model) {
  var selectedIndex = this.getAttribute('selectedTab') || 0;

  this._setTabUnderline(selectedIndex);
};
