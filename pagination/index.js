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

  model.start('visibleNumbers', 'activePage', 'pages', getVisibleNumbers);
};

Pagination.prototype.initPages = function () {
  this.model.fn('pages', function (end) {
    return _.range(1, end + 1);
  });

  this.model.start('pages', 'end', 'pages');
  this.model.get('pages');
};

// Helper fn for getting the currently visible page numbers
function getVisibleNumbers(activePage, pages) {
  var visibleNumbers = [];
  var nrOfPages = pages.length;
  var firstPage = activePage - 4;

  // Get numbers around active page
  if (firstPage > (nrOfPages - 8)) firstPage = (nrOfPages - 8);
  if (firstPage < 2) firstPage = 1;

  for (var i = firstPage - 1; i < (firstPage + 8); i++) {
    if(pages[i]) visibleNumbers.push(pages[i]);
  };

  // Remove numbers if ellipsis is showing so the paginator stays the same size.
  if(visibleNumbers[0] > 1) visibleNumbers = visibleNumbers.slice(2);
  if(visibleNumbers[visibleNumbers.length - 1] < pages.length) {
    visibleNumbers = visibleNumbers.slice(0, -2);
  }

  return visibleNumbers;
};
