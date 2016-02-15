# Progress
A progressbar component.

Features
--------
- Progress bar styled according to material design, based on mdl.
- Undetermined progress.

Usage
-----
### Including
```javascript
var mdlComponents = require('d-md-components');

app.component(mdlComponents.Progress);
```

#### Template
```html
  <view 
    is="progress"
    as="progress"
    loading="{{loading}}"
    class="extraClass"
    accent="#FF0000"
     />
  <button on-click="doTimeConsumingTask()">Load</button>
```

#### Controller
```javascript
Component.prototype.doTimeConsumingTask = function() {
  this.progress.show();

  // Simulate task with callback
  var self = this;
  setTimeout(function () {
    self.progress.hide();
  }, 3000);
};

// Alternative implementation using model variables instead of component methods.
Component.prototype.doTimeConsumingTask = function() {
  this.model.set('loading', true);

  var self = this;
  setTimeout(function () {
    self.model.del('loading');
  }, 3000);
};
```

Methods:
-----
### .show()
Shows the progressbar.

### .hide()
Hides the progressbar.

TODO:
-----
Add support for determined length progress bar (1-100%).
