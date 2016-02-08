# d-md-components/Textfield
A textfield component with a floating label.

Features
--------
- A styled textfield using mdl.io.
- In addition to textfield the component can display a textarea that is autoresizing by default.
- Use with derby-validator to mark fields invalid and see error messages below field.

Usage
-----
### Including
```javascript
require('d-md-components/textfield');
```

#### Template
```html
  <!-- All attributes except label are optional. 
      'fieldName' will be set to the inputs name attribute. This is useful for browser autofill reasons.
      If type="textarea" OR textarea attribute is provided, a self-expanding textarea will be used instead.
      'validator' will only work if derby-validator library is used. -->
  <view is="textfield" 
        as="$myTextfield"
        fieldName="email" 
        label="E-mail" 
        class="extraClass" 
        validator="{{validator}}" 
        type="email" 
        textarea="{{{ disableAutoResize: true, rows: 3 }}}"
        helper="persistant helper text"
        disabled="{{disabled}}" />
```

### this.$myTextfield.adjustTextarea()

The textfield is autoadjusting its height on creation as well as on any input to the field, including copy-paste/cut. However, if the component is created by Derby but not displayed for whatever reason, it's calculated height will be auto (meaning a fixed row-number that is 1 by default). When visible it will not get the correct height until it gets new input. You can call this method when the textarea becomes visible to adjust the height manually.

See readme of [Derby-validator](https://github.com/BBWeb/derby-validator) for usage of validation.

