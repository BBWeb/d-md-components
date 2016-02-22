# Datepicker
A datepicker component.

Features
--------
- A datepicker styled according to material design.
- Optional extra buttons displayed next to OK/Cancel.
- Min/max-range.


Usage
-----
### Including
```javascript
var mdlComponents = require('d-md-components');

app.component(mdlComponents.Datepicker);
```

#### Template
```html  
  <view is="datepicker" 
    as="$datepicker" 
    value="{{date}}" 
    inline="{{false}}" 
    actions="{{['Tomorrow', { text: 'Yesterday', class: 'blue', disableDismiss: true }]}}" 
    on-selected="foo()"
    on-action="bar(action)"
    on-show="baz()"
    on-hide="qux()" 
    options="{{
      {
        locale: 'sv',
        accent: 'rgb(0, 188, 212)',
        okText: 'Righty-O',
        cancelText: 'Forget it',
        disableCancel: false,
        autoOk: false,
        minDate: 2015-01-01,
        maxDate: 2020-12-31
      }
    }}" 
  />
```

## Public Methods

### this.$datepicker.show()

Displays the datepicker.

### this.$datepicker.hide()

Hides the datepicker programatically.
