# Checkbox
A checkbox component.



Features
--------
- Checkboxes styled as mdl.

Usage
-----
### Including
```javascript
var mdlComponents = require('d-md-components');

app.component(mdlComponents.Checkbox);
```

#### Template
```html
  <view 
    is="checkbox" 
    label="Check this" 
    checked="{{isChecked}}" 
    on-checked="checkboxClicked()"
    validator="{{validator}}"
    fieldName="checkbox"
     />
```
#### Notes:
on-checked - Emits an event when clicked. Passes a bool if it's checked or not.  
See readme of [Derby-validator](https://github.com/BBWeb/derby-validator) for usage of validation (validator and fieldName attributes).  
