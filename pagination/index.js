module.exports = Pagination;

function Pagination() {}

Pagination.prototype.view = __dirname + '/views';
Pagination.prototype.style = __dirname + '/styles';
Pagination.prototype.name = 'pagination';
Pagination.prototype.components = [];

require('./operations');
require('./actions');
require('./viewhelpers');

Pagination.prototype.init = function(model) {
  model.start('visibleNumbers', 'activePage', 'pages', this.getVisibleNumbers);
};
