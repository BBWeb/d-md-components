# CheckboxTextfield
A checkbox + textfield combo component.


Features
--------
- Checkbox and textfield styled as mdl.
- If checkbox is unchecked the textfield will be disabled...
- Unless the textfield is empty: any input from here will check the box.

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
    is="checkboxTextfield" 
    label="Label" 
    class="extraClass" 
    checked="{{isChecked}}"
    value="{{textValue}}" 
    on-checked="checkboxClicked()"
     />
```
#### Notes:
on-checked - Emits an event when clicked. Passes a bool if it's checked or not.
