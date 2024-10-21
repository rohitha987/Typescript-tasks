import { Book } from "./book";
import { Member } from "./member";
import { Author } from "./author";

export class Library {
    private books: Book[] = [];
    private members: Member[] = [];
    private authors: Author[] = [];

    addAuthor(author: Author): void {
        this.authors.push(author);
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    addMember(member: Member): void {
        this.members.push(member);
    }

    borrowBook(memberId: number, bookId: number): string {
        const book = this.books.find(b => b.bookId === bookId);
        const member = this.members.find(m => m.id === memberId);

        if (!book) return `Book with ID ${bookId} not found.`;
        if (!member) return `Member with ID ${memberId} not found.`;
        if (book.isBorrowed) return `Book "${book.bookName}" is already borrowed.`;

        book.isBorrowed = true;
        book.borrowerId = memberId;
        return `Member "${member.name}" borrowed book "${book.bookName}".`;
    }

    returnBook(bookId: number): string {
        const book = this.books.find(b => b.bookId === bookId);
        if (!book) return `Book with ID ${bookId} not found.`;
        if (!book.isBorrowed) return `Book "${book.bookName}" was not borrowed.`;

        book.isBorrowed = false;
        book.borrowerId = null;
        return `Book "${book.bookName}" has been returned.`;
    }

    getBooksByAuthor(authorId: number): Book[] {
        return this.books.filter(book => book.author.id === authorId);
    }
}
