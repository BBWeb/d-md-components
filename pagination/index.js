var _ = require('lodash');

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
  if(typeof model.get('end') !== 'undefined') this.initPages();

  model.start('visibleNumbers', 'activePage', 'pages', this.getVisibleNumbers);
};

Pagination.prototype.initPages = function () {
  this.model.fn('pages', function (end) {
    return _.range(1, end + 1);
  });

  this.model.start('pages', 'end', 'pages');
  this.model.get('pages');
};
