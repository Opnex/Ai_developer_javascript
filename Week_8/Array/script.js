// Creating arrays with square brackets []
let fruits = ["apple", "banana", "orange", "grape"];
let numbers = [10, 25, 30, 45, 50];
let booleans = [true, false, true, true];
let mixedArray = ["John", 25, true, "student"];

// Empty array
let emptyArray = [];

console.log("Fruits array:", fruits);
console.log("Numbers array:", numbers);
console.log("Mixed array:", mixedArray);
console.log("Empty array:", emptyArray);
console.log("Empty arrays:", booleans);

// Array length property
console.log("Number of fruits:", fruits.length);
console.log("Number of numbers:", numbers.length);
console.log("Empty array length:", emptyArray.length);

console.log(""); // Empty line

// Accessing individual elements with index [0, 1, 2, ...]
console.log("First fruit:", fruits[0]);     // apple
console.log("Second fruit:", fruits[1]);    // banana
console.log("Last fruit:", fruits[fruits.length - 1]); // grape

console.log("First number:", numbers[0]);   // 10
console.log("Third number:", numbers[2]);   // 30
console.log("Third number:", numbers[numbers.length -1]);   // 30

// What happens with invalid indexes?
console.log("Index that doesn't exist:", fruits[10]); // undefined