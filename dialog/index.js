module.exports = Dialog;

function Dialog() {}

Dialog.prototype.view = __dirname + '/views';
Dialog.prototype.style = __dirname + '/styles';
Dialog.prototype.name = 'dialog';
Dialog.prototype.components = [];

require('./operations');
require('./actions');
