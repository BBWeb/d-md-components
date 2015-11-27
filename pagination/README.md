# Snackbar
A pagination component.


Features
--------
- A pagination component in material design style. 

Usage
-----
### Including
```javascript
var mdlComponents = require('d-md-components');

app.component(mdlComponents.Pagination);
```

#### Template
```html
  <view is="pagination" pages="{{pagination.pages}}" activePage="{{pagination.activePage}}" />
```

Note: Style button-background-color by overriding .mdl-button::before background-color.

### TODO
- Add options for how many pages to display numbers for.
- Add option for narrow layout wich only shows one number and arrows.
