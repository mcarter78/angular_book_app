angular
  .module('bookApp')
  .controller('BooksController', BooksController);

function BooksController (Book) {
  var self = this;
  this.newBook = {};
  this.books = Book.query(); // returns all the books
  this.createBook = createBook;
  this.updateBook = updateBook;
  this.deleteBook = deleteBook;

  function updateBook(book) {
    Book.update({id: book._id}, book);
    book.editForm = false;
  };

  function createBook(){
    Book.save(this.newBook, function(res){
      console.log(res);
      self.books.push(res);
      self.newBook = {};
    });
  };

  function deleteBook(book) {
    Book.remove({id:book._id});
    var bookIndex = this.books.indexOf(book);
    this.books.splice(bookIndex, 1);
  };

  console.log("Controller loaded.");
};
