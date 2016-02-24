# Timepicker
A timepicker component.

Features
--------
- A timepicker styled according to material design.
- Select from 24-hour clock, hours and minutes.

Usage
-----
### Including
```javascript
var mdlComponents = require('d-md-components');

app.component(mdlComponents.Timepicker);
```

#### Template
```html  
  <view is="timepicker" 
    as="$timepicker" 
    value="{{time}}" 
    inline="{{false}}" 
    on-selected="foo()"
    on-show="bar()"
    on-hide="baz()" 
    options="{{
      {
        accent: 'rgb(0, 188, 212)',
        activeHour: '12'
        activeMinute: '30'
        okText: 'Righty-O',
        cancelText: 'Forget it',
      }
    }}" 
  />
```

## Public Methods

### this.$timepicker.show()

Displays the timepicker.

### this.$timepicker.hide()

Hides the timepicker programatically.
