# Slider
A slider component.



Features
--------
- Slider styled as mdl.
- Floating data bubble over the thumb.
- Customizable labels of the data.

Usage
-----
### Including
```javascript
var mdlComponents = require('d-md-components');

app.component(mdlComponents.Slider);
```

#### Template
```html
  <view 
    is="slider"
    min="0"
    max="{{rangeMax}}"
    step="1"
    value="{{rangeData}}"
    class="extraClass" 
    labels="['one', 'two', 'three']"
     />
```

##### Notes:
All attributes are optional. Defaults are html5 range 0 - 100 with a step of 1.  
Labels is a list of strings that can be used to represent the steps in order. If there is no labels or the list is shorter than the range, the current value will be used instead.

##### Acccent color:
```css
.d-md-slider
  .mdl-slider.is-upgraded::-webkit-slider-thumb,
  .mdl-slider.is-upgraded:focus::-webkit-slider-thumb,
  .mdl-slider.is-upgraded:active::-webkit-slider-thumb,
  .mdl-slider.is-upgraded:focus:not(:active)::-webkit-slider-thumb,
  {
    background                        red
  }
  .mdl-slider.is-upgraded::-moz-range-thumb,
  .mdl-slider.is-upgraded:focus::-moz-range-thumb,
  .mdl-slider.is-upgraded:active::-moz-range-thumb,
  .mdl-slider.is-upgraded:focus:not(:active)::-moz-range-thumb {
    background                        red
  }
  .bubble {
    background                        red
  }
  .bubble:after {
    border-color                      red
  }
```
