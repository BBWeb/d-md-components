# Spinner
A spinner component.

Features
--------
- A styled spinner according to material design using mdl.
- Can be colored to your own accent color.

Usage
-----
### Including
```javascript
var mdlComponents = require('d-md-components');

app.component(mdlComponents.Spinner);
```

#### Template
```html
  <view 
    is="spinner" 
    as="$spinner" 
    class="extraClass" 
    accent="rgb(0, 188, 212)" />
  <button on-click="doSomeTimeConsumingTask()">Load spinner</button>
```

#### Controller
```javascript
Component.prototype.doSomeTimeConsumingTask = function() {
  this.$spinner.show();

  // Simulate task with callback.
  var self = this;
  setTimeout(function () {
    self.$spinner.hide();
  }, 3000);
}
```

Methods
-------
##### .show()
Shows the spinner.

##### .hide()
Hides the spinner.
