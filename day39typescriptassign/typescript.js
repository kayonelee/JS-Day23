//(ESday36JS Assignment) Create two arrays of numbers called numbers1 and numbers2
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var numbers1 = [1, 2, 3];
var numbers2 = [7, 8, 9];
// Use the spread operator to create an array called numbers that combines the elements of numbers1 and numbers2.
var numbers = __spreadArray(__spreadArray([], numbers1, true), numbers2, true);
// Define an arrow function called square that accepts a number as an argument and returns the square of the number.
var square = function (num) { return num * num; };
// Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array.
var squares = numbers.map(square);
// Define the isEven function
var isEven = function (num) { return num % 2 === 0; };
// Use the filter method to create an array of even squares
var evenSquares = squares.filter(isEven);
// Use destructuring assignment to extract the first two elements of the evenSquares array
var firstEvenSquare = evenSquares[0], secondEvenSquare = evenSquares[1];
// Use a template literal to log the arrays and the extracted even squares
console.log("Numbers: ".concat(numbers));
console.log("Squares: ".concat(squares));
console.log("EvenSquares: ".concat(evenSquares));
console.log("FirstEvenSquare: ".concat(firstEvenSquare));
console.log("SecondEvenSquare: ".concat(secondEvenSquare));
// // Create two arrays of numbers called numbers1 and numbers2
// const numbers1 = [1, 2, 3];
// const numbers2 = [7, 8, 9];
// // Use the spread operator to create an array called numbers that combines the elements of numbers1 and numbers2.
// const numbers = [...numbers1, ...numbers2];
// // Define an arrow function called square that accepts a number as an argument and returns the square of the number.
// const square = (num) => num * num;
// // Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array.
// const squares = numbers.map(square);
// // Define the isEven function
// const isEven = (num) => num % 2 === 0;
// // Use the filter method to create an array of even squares
// const evenSquares = squares.filter(isEven);
// // Use destructuring assignment to extract the first two elements of the evenSquares array
// const [firstEvenSquare, secondEvenSquare] = evenSquares;
// // Use a template literal to log the arrays and the extracted even squares
// console.log(`Numbers: ${numbers}`);
// console.log(`Squares: ${squares}`);
// console.log(`EvenSquares: ${evenSquares}`);
// console.log(`FirstEvenSquare: ${firstEvenSquare}`);
// console.log(`SecondEvenSquare: ${secondEvenSquare}`);
