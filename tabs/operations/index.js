var Tabs = require('./../index');

Tabs.prototype._selectTab = function (index, el) {
  this.model.setEach('selectedTab',  { index : index, height: el.clientHeight + el.nextElementSibling.clientHeight });

  this.model.setEach('tabsUnderline', { left: el.offsetLeft, width: el.clientWidth });
}
