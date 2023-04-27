// Define an interface Book with the following properties:
// Create an array books with the type Book[] and add a few sample books to the array.
var books = [
    { id: 1, title: "Dear John", author: "Nicholas Sparks", published: new Date(10 / 30 / 2006), available: true },
    { id: 2, title: "Safe Haven", author: "Nicholas Sparks", published: new Date(1 / 1 / 2010), available: true },
    { id: 3, title: "A Walk to Remember", author: "Nicholas Sparks", published: new Date(10 / 1 / 1999), available: false },
];
// Define a function addBook(book: Book): void that takes a Book object as a parameter and adds it to the books array.
function addBook(book) {
    books.push(book);
}
//   Define a function findBookById(id: number): Book | undefined that takes a book id as a parameter and returns the book with the given id or undefined if the book is not found.
function findBookById(id) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            return books[i];
        }
    }
    return undefined;
}
// Define a function updateBook(book: Book): boolean that takes a Book object as a parameter, finds the book with the same id in the books array, and updates its properties. The function should return true if the book was updated successfully or false if the book was not found.
function updateBook(book) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].id === book.id) {
            books[i] = book;
            return true;
        }
    }
    return false;
}
// Define a function removeBook(id: number): boolean that takes a book id as a parameter and removes the book with the given id from the books array. The function should return true if the book was removed successfully or false if the book was not found.
function removeBook(id) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            books.splice(i, 1);
            return true;
        }
    }
    return false;
}
// Test your functions by adding, updating, and removing books, and finding books by their id.
// Add new id4
addBook({ id: 4, title: "The Notebook", author: "Nicholas Sparks", published: new Date("10-1-1996"), available: true });
console.log(books);
// Update id 3
console.log(updateBook({ id: 3, title: "A Walk to Remember", author: "Nicholas Sparks", published: new Date(10 / 1 / 1999), available: true }));
// console.log(books);
// Find id2 book
console.log(findBookById(3));
// remove id2
console.log(removeBook(2));
console.log(books);




// node filename.js ----the typescript file will not run by itself unless we configure a server that automatically compiles the TS to JS with something like webpack or vite however in this case we are compiling it manually with the command npm run build. 
