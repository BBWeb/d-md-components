# Dialog
A dialog component.

Features
--------
- A dialog in the style of material design.
- Optional title.
- Any number of buttons.

Usage
-----
### Including
```javascript
var mdlComponents = require('d-md-components');

app.component(mdlComponents.Dialog);
```

#### Template
```html
  <view 
    is="dialog"
    as="myDialog"
    title="Discard changes?"
    actions="{{['No', 'Yes']}}"
    on-hide="dialogWillHide(action, cancel)"
    options="{{{ 
      overlay: {
        clickToHide: true
      } 
    }}}">
    <!-- Content is usually just a description but can hold anything and will take as much space as it needs. To handle width you have to provide your own styling or use a pre-defined class: d-md-dialog-narrow, d-md-dialog-medium, d-md-dialog-wide -->
    <div class="d-md-dialog-narrow">
      This action cannot be reversed. Are you sure you want to continue?
    </div>
  </view>
  <button on-click="myDialog.show($event)">Discard</button>

```

*Example handling of the on-hide event:*
```javascript
Component.prototype.dialogWillHide = function (action, cancel) {
  switch (action) {
    case 'No':
        // Handle
        break;
    case 'Yes':
        // Handle
        break;
    default:
        // Other cases may include click on overlay or manually calling maybeHide() for example.
  }
}
```

Template attributes
-------------------
**title [{String}]**
A title.

**actions {Array}**
A list of {String} actions. Used as button text and passed in the hide-event so you can act accordingly. 

**on-hide {Function}**
A function to handle all action-button clicks. Will be passed {String} action that triggered the event, and {Function} cancel if you want to stop the dialog from hiding for any reason. If the event is cancelled, it has to be manually hidden with hide().

**options {[Object]}**
An options object.

**options.zIndex {[Number]}**
A z-index for the dialog, default is 300.

**options.overlay {[Object || Boolean]}**
If present, will add a semi-transparent div over the screen, that may or may not be clicked to close the dialog.

**options.overlay.clickTohide {[Boolean]}**
If true, clicks on overlay emits hide event just as if user would have pressed a button, emit passes 'overlay' as action argument. Default clickToHide is false.

**options.overlay.closeAction {[String]}**
If provided, overwrites 'overlay' as action passed to it's listeners when closed by clicks on overlay.

**options.overlay.class {[String]}**
A class that will be assigned to the overlay. Default class is d-md-dialog-overlay.  


Public methods
--------------
##### .show(e)
Show the dialog.

e {[Event]} - Animates from click coordinates instead of from screen middle if this argument is provided.

##### .maybeHide(action)
Emits a cancellable event and hides the dialog if it isn't cancelled by a listener. Triggered by all 
actionbuttons in the component.

action {String} - Represents the action (button) the user pressed to close the dialog. Is passed 
through the emit event for any listeners to respond to accordingly.

##### .hide()
Hide the dialog. No event is emitted. Useful if you have cancelled the hide-event.

TODO
-----
Add support for actions to be passed as html elements  
Add support for actionbuttons to be disabled.
