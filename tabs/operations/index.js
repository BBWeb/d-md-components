var Tabs = require('./../index');
var _ = require('lodash');

Tabs.prototype._selectTab = function (index, el) {
  // Only animate if another tab is leaving view.
  var leavingIndex = this.model.get('selectedTab');
  if (leavingIndex !== undefined) this._animateTab(index, leavingIndex);

  this.model.set('selectedTab', index);
  this.model.setEach('tabsUnderline', { left: el.offsetLeft, width: el.clientWidth });
};

Tabs.prototype._animateTab = function (index, leavingIndex) {
  var componentId = this.model.get('id');
  var selectedTab = document.getElementById(componentId + '-tab-content-' + index);
  var leavingTab = document.getElementById(componentId + '-tab-content-' + leavingIndex);

  var reset = selectedTab.className;
  var leavingMax = leavingTab.scrollHeight + 'px';
  
  selectedTab.className += ' no-transition';
  leavingTab.style.maxHeight = leavingMax;
  selectedTab.style.maxHeight = leavingMax;
  // Force style recalculation for transitions to work. See http://stackoverflow.com/questions/18564942/clean-way-to-programmatically-use-css-transitions-from-js/31862081
  window.getComputedStyle(selectedTab).maxHeight
  selectedTab.className = reset;

  this._setAnimation();  
  this.model.set('viewHeight', selectedTab.scrollHeight);
};

Tabs.prototype._assignPositions = function (tabs) {
 var self = this;
 var offset = 100/tabs.length;

  _.each(tabs, function(tab, index) {
    var before = -(index * offset);
    var selected;
    var after;

    if (index === 0) { 
      selected = offset;
    } else if (index === 1) {
      selected = 0;
    } else {
      selected = -((index * offset) - offset);
    }

    if (index === 1) { 
      after = offset;
    } else if (index === 2) {
      after = 0;
    } else {
      after = -((index * offset) - (offset * 2));
    }

    self.model.setEach('tabPositions.' + index, {
      selected: selected,
      before: before,
      after: after
    });
  });
};

Tabs.prototype._setAnimation = function() {
  var self = this;

  this.model.set('animating', true);
  setTimeout(function(){
    self.model.set('animating', false);
  }, 300);
};