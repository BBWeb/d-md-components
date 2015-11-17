# Tabs
A tabs component.

Features
--------
- A styled tabs according to material design.


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
  <view is="tabs" selectedTab="1">
    <tab label="tab1">
      Arbitrary content of the tab
    </tab>
    <tab label="tab2">
      content...
    </tab>
    <tab label="tab3">
      more content...
    </tab>  
```
