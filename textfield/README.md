# d-md-components/Textfield
A textfield component with a floating label.

Features
--------
- A styled textfield using mdl.io.
- Use with derby-validator to mark fields invalid and see error messages below field.

Usage
-----
### Including
```javascript
require('d-md-components/textfield');
```

#### Template
```html
  <!-- All attributes exept label are optional. 
      'fieldName' will be set to the inputs name attribute. This is useful for browser autofill reasons.
      If type="textarea", a self-expanding textarea will be used instead.
      'validator' will only work if derby-validator library is used. -->
  <view is="textfield" 
        fieldName="email" 
        label="E-mail" 
        class="extraClass" 
        validator="{{validator}}" 
        type="email" 
        helper="persistant helper text"
        disabled="{{disabled}}" />
```

See readme of [Derby-validator](https://github.com/BBWeb/derby-validator) for usage of validation.
