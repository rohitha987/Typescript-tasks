"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(bookId, // Changed from id to bookId
    bookName, // Changed from title to bookName
    author, genre, year) {
        this.bookId = bookId;
        this.bookName = bookName;
        this.author = author;
        this.genre = genre;
        this.year = year;
        this.isBorrowed = false;
        this.borrowerId = null;
    }
    return Book;
}());
exports.Book = Book;
