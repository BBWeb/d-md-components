# Tabs
A tabs component.

Features
--------
- A styled tabs according to material design.
- Can show error state on tab headers.

Usage
-----
### Including
```javascript
var mdlComponents = require('d-md-components');

app.component(mdlComponents.Tabs);
```

#### Template
```html
  <!-- selectedTab is optional index of selectedTab, 0 as default -->
  <view is="tabs" selectedTab="{{1}}" class="extraClass" errorList="{{errorList}}">
    <tab label="tab1">
      Arbitrary content of the tab
    </tab>
    <tab label="tab2" hide="{{hideMe}}">
      content...
    </tab>
    <tab label="tab3">
      more content...
    </tab>  
```

### Attributes
#### {Model|Number} [selectedTab] 
If model, should evaluate to a number. Controls which tabindex is selected. Set by clicks on tabheaders.

#### {String} [class]
Extra class if wanted.

#### {Model} [errorList]
Should evaluate to an array containing indices of tabs that you want to mark with an error (red text and underline). As soon as the tab is clicked the index is removed from the list.

#### {Model} [hide]
Hides tab header if true making the tab unselectable. Does not remove the tab.

### Methods
#### .selectTab(tabIndex)
#### .setInValid(tabIndex)
#### .setValid(tabIndex)
For programmatic access to these states.


