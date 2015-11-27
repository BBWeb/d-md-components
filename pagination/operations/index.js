var Pagination = require('./../index')

Pagination.prototype._goToPage = function (page) {
  var last = this.model.get('pages').length;

  if(page < 1) page = 1;
  if(page > last) page = last;

  this.model.set('activePage', page);
};
