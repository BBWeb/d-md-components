var Snackbar = require('./../index');
var _ = require('lodash');

Snackbar.prototype._addToQueue = function (text, button, buttonFn, options) {
  if(arguments.length === 2) {
    options = arguments[1];
    button = undefined;
  }

  this.model.push('queue', {
      params: [text, button, buttonFn, options],
      type: 'show'
    });
  this.model.push('queue', {
      type: 'hide'
    });
  this._showNext();
};

Snackbar.prototype._show = function (text, button, buttonFn, options) {
  var model = this.model;
  var self = this;
  var options = getOptions(options, this.globalOptions);

  model.set('showing', true);
  model.set('text', text);
  model.set('button', button);
  this.buttonFn = buttonFn;

  model.del('buttonClass');
  if(options.buttonClass) model.set('buttonClass', options.buttonClass);

  model.set('timeout', setTimeout(function () {
    model.del('timeout');

    self._showNext();
  }, options.timeShowing));
};

Snackbar.prototype._hide = function () {
  var self = this;

  this.model.del('showing');

  this.model.set('timeout', setTimeout(function () {
    self.model.del('timeout');

    self._showNext();
  }, 300));
};

Snackbar.prototype._showNext = function (force) {
  if (this.model.get('timeout') && !force) return;

  var data = this.model.shift('queue');

  // We've reached the end of the queue
  if(!data) return;

  this['_' + data.type].apply(this, data.params);
};

Snackbar.prototype._close = function () {
  var next = this.model.get('queue.0');

  // There's no next in queue - there's nothing to do
  if(!next) return;

  // If next type is hide, force hiding
  if(next.type === 'hide') this._showNext(true);
};

function getOptions(options, globalOptions) {
  return _.assign({
    timeShowing: 3800
  }, globalOptions, options);
}
