const numbers = [9,555,1, 2, 3, 4, 5];


const L=console.log;
// Array function: map()
// Applies a function to each element of the array and returns a new array with the results
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared numbers:", squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Array function: filter()
// Creates a new array with elements that pass the test implemented by the provided function
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // Output: [2, 4]


// find(): Returns the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
const found = numbers.find(num => num >4);
console.log("First number greater than 4:", found); // Output: 3


// some(): Checks if at least one element in the array satisfies the provided testing function.
const hasNegative = numbers.some(num => num < 0);
console.log("Has negative number:", hasNegative); // Output: false


// every(): Checks if all elements in the array satisfy the provided testing function.
const allPositive = numbers.every(num => num > 0);
console.log("Are all numbers positive:", allPositive); // Output: true



// sort(): Sorts the elements of an array in place and returns the sorted array.
const fruits = ["banana", "apple", "orange", "grape"];
fruits.sort();
console.log("Sorted fruits:", fruits); // Output: ["apple", "banana", "grape", "orange"]


L(`Number sorting verify ${numbers.sort()}`)

