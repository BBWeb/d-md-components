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
      'fieldName' will be set to the input>name attribute.
      'validator' will only work if derby-validator library is used. -->
  <view is="textfield" fieldName="email" label="E-mail" validator="{{validator}}" type="email"></view>
```

See readme of derby-validator for usage of validation.
