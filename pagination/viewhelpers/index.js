var Pagination = require('./../index');

Pagination.prototype.getVisibleNumbers = function (activePage, pages) {
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
