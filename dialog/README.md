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
    class="extraClass" 
    options="{{{ 
      overlay: {
        clickToHide: true
      } 
    }}}">
    <div class="dmd-width--280">
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
**{String} [title]**
A title.

**{String[]} [actions]**
A list of {String} actions. Used as button text and passed in the hide-event so you can act accordingly. 

**{Object} [options]**
An options object.

**{Number} [options.zIndex]**
A z-index for the dialog, default is 300.

**{Object||Boolean} [options.overlay]**
If present, will add a semi-transparent div over the screen, that may or may not be clicked to close the dialog.

**{Boolean} [options.overlay.clickTohide]**
If true, clicks on overlay emits hide event just as if user would have pressed a button, emit passes 'overlay' as action argument. Default false.

**{String} [options.overlay.closeAction]**
If provided, overwrites 'overlay' as action passed to it's listeners when closed by clicks on overlay.

**{String} [options.overlay.class]**
A class that will be assigned to the overlay.  

*Note:*

The content can be styled however you like but there are three pre-defined max-width classes:  
dmd-width--280: 280px  
dmd-width--600: 600px  
dmd-width--1240: 1240px  


Events
------
@fires hide - When dialog is dismissed. Fired by all action buttons as well as by clicks on overlay.
  @parameter {String} action   - The action that triggered the event
  @parameter {Function} cancel - Call if you want to stop the dialog from hiding for any reason. Use hide() or triggered again with another button.


Public methods
--------------
### myDialog.show(e)
Show the dialog.

@parameter {Event} [e] - Animates from click coordinates instead of from screen middle if this argument is provided.

### myDialog.hide()
Hide the dialog.


TODO
-----
Add support for actions to be passed as html elements  
Add support for actionbuttons to be disabled.
