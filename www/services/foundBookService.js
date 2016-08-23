bookScan.service('foundBookService', function() {

  var foundBook = null;
  // var foundBook = "9780451524935";

  var setFoundBook = function(book) {
    foundBook = book;
  };

  var getFoundBook = function() {
    return foundBook;
  };

  return {
    getFoundBook: getFoundBook,
    setFoundBook: setFoundBook
  };

});
