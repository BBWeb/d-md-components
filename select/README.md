# Select
A select/options component.

Features
--------
- Select styled as mdl.
- Scrolls list to selected option.

Usage
-----
### Including
```javascript
var mdlComponents = require('d-md-components');

app.component(mdlComponents.Select);
```

#### Template
```html
  <view 
    is="select"
    label="Options"
    optionList="{{optionList}}"
    value="{{selectedValue}}"
    key="key"
    text="text"
     />
```

##### Note:
optionList - an object-array with at least one property with a string value you would like to display.  
key - the name of the property that is saved as value.  
text - the name of the property of the value you want to display.  
Key and text can point to the same property in the optionlist if that is the value that you want to both save and display.
