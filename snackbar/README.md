# Snackbar
A snackbar/toast component.

[Back to d-md-components](../)

Features
--------
- A styled snackbar/toast according to material design.
- Can show one button.
- Options to style button and control time on screen, either globally for all toast that the component shows, or for each individual toast.

Usage
-----
### Including
```javascript
var mdlComponents = require('d-md-components');

app.component(mdlComponents.Snackbar);
```

#### Template
```html
  <!-- Options are optional and will be overwritten if passed in the 'add' method. -->
  <view 
    is="snackbar" 
    as="snackbar" 
    options="{{
      {
        buttonClass: 'button-accent-color'
        timeShowing: 2000
      }
    }}" />
    <button on-click="snack()">Show</button>
```

*Add snack to queue:*
```javascript
Component.prototype.snack = function() {
  this.snackbar.add(
    'This is a snackbar message.',
    'Click me',
    function () {
      console.log('Snackbar button pressed.');
    },
    {
      timeShowing: 4000
    }  
  );
}
```

Add() can take up to 4 arguments:
- message: String - The toast message, has to be short. ~60 characters depending on button size.
- [button]: String - The button text. If this argument is passed, the buttonFn argument needs to be passed as well.
- [buttonFn]: Function - A function to run when button is pressed. If this argument is passed, the buttonFn argument needs to be passed as well.
- [options]: Object - An options object.
  - [options.timeShowing]: Number - Time in ms to show the toast, default 3800.
  - [options.buttonClass]: String - A class name if you want to style the button text (ex. material design accent color). Default color of the button is white.

Other methods
-------
##### .close()
Close the currently showing snackbar.

##### .next()
Forces the next toast in the queue to show no matter how much time is left on the currently showing.
