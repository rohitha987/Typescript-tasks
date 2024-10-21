"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("./library");
var book_1 = require("./book");
var member_1 = require("./member");
var author_1 = require("./author");
var library = new library_1.Library();
var author1 = new author_1.Author(1, "J.K. Rowling", "abc@gmail.com");
var author2 = new author_1.Author(2, "Stephen King", "sk@gmail.com");
var author3 = new author_1.Author(3, "J.R.R. Tolkien", "jrr@gmail.com");
library.addAuthor(author1);
library.addAuthor(author2);
library.addAuthor(author3);
// Updated instances of Book
var book1 = new book_1.Book(1, "Harry Potter and the Philosopher's Stone", author1, "Fantasy", 1997);
var book2 = new book_1.Book(2, "The Shining", author2, "Horror", 1977);
var book3 = new book_1.Book(3, "The Lord of the Rings", author3, "Fantasy", 1954);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
var member1 = new member_1.Member(1, "John Doe", "johndoe@example.com");
var member2 = new member_1.Member(2, "Jane Smith", "janesmith@example.com");
library.addMember(member1);
library.addMember(member2);
console.log(library.borrowBook(1, 1)); // Member 1 borrows Book 1
console.log(library.borrowBook(2, 2)); // Member 2 borrows Book 2
console.log(library.returnBook(1)); // Return Book 1
console.log(library.getBooksByAuthor(1)); // Get books by author with ID 1
