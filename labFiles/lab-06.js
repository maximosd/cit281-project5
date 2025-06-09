class Book {
  constructor(title, author, pubDate, isbn) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
    this.isbn = isbn;
  }
}

//Create a book
//const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018");

class Library {
  constructor(name) {
    this._name = name;
    this._books = [];
  }
  get books() {
    // Return copy of books
    return JSON.parse(JSON.stringify(this._books));
  }
  get count() {
    return this._books.length;
  }
  addBook(book = {}) {
    const { title = "", author = "", pubDate = "", isbn = "" } = book;
    if (title.length > 0 && author.length > 0) {
      const newBook = { title, author, pubDate, isbn };
      this._books.push(newBook);
    }
  }
  listBooks() {
    for (const book of this._books) {
      const {title, author, pubDate, isbn} = book;
      console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`);
    }
  }
  //delets a book by an isbn
    deleteBook(isbn) {
        const index = this._books.findIndex(book => book.isbn === isbn);
        if (index !== -1) {
        this._books.splice(index, 1);
        }
    }
}

// Create library object
const library = new Library("New York Times Best Seller List");

// Create a book
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "978-0735211292");
const theHungerGames = new Book("The Hunger Games", "Suzanne Collins", "9/14/2008", "978-0439023528");
const theGiver = new Book("The Giver", "Lois Lowry", "4/26/1993", "978-0440237686");
const ofMiceAndMen = new Book("Of Mice and Men", "John Steinbeck", "2/6/1937", "978-0140177398");

// Add book to library and output library count and books
library.addBook(atomicHabits);
library.addBook(theHungerGames);
library.addBook(theGiver);
library.addBook(ofMiceAndMen);
library.listBooks();
library.deleteBook("978-0439023528");
library.listBooks();
