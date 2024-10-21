import { Author } from "./author";

export class Book {
    public isBorrowed: boolean = false;
    public borrowerId: number | null = null;

    constructor(
        public bookId: number,       // Changed from id to bookId
        public bookName: string,     // Changed from title to bookName
        public author: Author,
        public genre: string,
        public year: number
    ) {}
}
