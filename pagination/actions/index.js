var Pagination = require('./../index');

Pagination.prototype.goToPage = Pagination.prototype._goToPage;

Pagination.prototype.nextPage = function () {  
  this._goToPage(this.model.get('activePage') + 1);
};

Pagination.prototype.previousPage = function () {
  this._goToPage(this.model.get('activePage') - 1);
};
