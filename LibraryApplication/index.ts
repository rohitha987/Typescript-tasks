import { Library } from "./library";
import { Book } from "./book";
import { Member } from "./member";
import { Author } from "./author";

const library = new Library();

const author1 = new Author(1, "J.K. Rowling", "abc@gmail.com");
const author2 = new Author(2, "Stephen King", "sk@gmail.com");
const author3 = new Author(3, "J.R.R. Tolkien", "jrr@gmail.com");   

library.addAuthor(author1);
library.addAuthor(author2);
library.addAuthor(author3);

// Updated instances of Book
const book1 = new Book(1, "Harry Potter and the Philosopher's Stone", author1, "Fantasy", 1997);
const book2 = new Book(2, "The Shining", author2, "Horror", 1977);
const book3 = new Book(3, "The Lord of the Rings", author3, "Fantasy", 1954);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const member1 = new Member(1, "John Doe", "johndoe@example.com");
const member2 = new Member(2, "Jane Smith", "janesmith@example.com");

library.addMember(member1);
library.addMember(member2);

console.log(library.borrowBook(1, 1)); // Member 1 borrows Book 1
console.log(library.borrowBook(2, 2)); // Member 2 borrows Book 2
console.log(library.returnBook(1)); // Return Book 1
console.log(library.getBooksByAuthor(1)); // Get books by author with ID 1
