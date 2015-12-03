var _ = require('lodash');
var Overlay = require('./../index');

Overlay.prototype.zIndexExists = function (zIndex) {
  var z = Number(zIndex);
  return _.isFinite(z);
};
