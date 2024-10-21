"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
        this.authors = [];
    }
    Library.prototype.addAuthor = function (author) {
        this.authors.push(author);
    };
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.addMember = function (member) {
        this.members.push(member);
    };
    Library.prototype.borrowBook = function (memberId, bookId) {
        var book = this.books.find(function (b) { return b.bookId === bookId; });
        var member = this.members.find(function (m) { return m.id === memberId; });
        if (!book)
            return "Book with ID ".concat(bookId, " not found.");
        if (!member)
            return "Member with ID ".concat(memberId, " not found.");
        if (book.isBorrowed)
            return "Book \"".concat(book.bookName, "\" is already borrowed.");
        book.isBorrowed = true;
        book.borrowerId = memberId;
        return "Member \"".concat(member.name, "\" borrowed book \"").concat(book.bookName, "\".");
    };
    Library.prototype.returnBook = function (bookId) {
        var book = this.books.find(function (b) { return b.bookId === bookId; });
        if (!book)
            return "Book with ID ".concat(bookId, " not found.");
        if (!book.isBorrowed)
            return "Book \"".concat(book.bookName, "\" was not borrowed.");
        book.isBorrowed = false;
        book.borrowerId = null;
        return "Book \"".concat(book.bookName, "\" has been returned.");
    };
    Library.prototype.getBooksByAuthor = function (authorId) {
        return this.books.filter(function (book) { return book.author.id === authorId; });
    };
    return Library;
}());
exports.Library = Library;
