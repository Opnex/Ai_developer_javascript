                                // More Array Methods       

let numbers = [1, 2, 3, 4, 5];
let names = ["John", "Jane", "Bob", "Alice"];

console.log("Original numbers:", numbers);
console.log("Original names:", names);

console.log(""); // Empty line

// slice() - Get a portion of the array (doesn't change original)
let firstThree = numbers.slice(0, 3);  // Get items 0, 1, 2
let lastTwo = numbers.slice(-2);       // Get last 2 items
console.log("First three numbers:", firstThree);
console.log("Last two numbers:", lastTwo);
console.log("Original unchanged:", numbers);

console.log(""); // Empty line

// splice() - Remove/add items at specific position (changes original)
let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log("Original fruits:", fruits);

// Remove 2 items starting at index 1
let removed = fruits.splice(1, 2);
console.log("Removed items:", removed);
console.log("After removal:", fruits);

// Add items at index 1
fruits.splice(1, 0, "mango", "pineapple"); // Remove 0, add 2 items
console.log("After adding:", fruits);

console.log(""); // Empty line

// join() - Convert array to string
let words = ["Hello", "from", "JavaScript"];
let sentence = words.join(" ");        // Join with spaces
let csv = words.join(",");             // Join with commas
console.log("Words array:", words);
console.log("As sentence:", sentence);
console.log("As CSV:", csv);

console.log(""); // Empty line

// / split() - Convert string to array (string method, but creates arrays)
let message = "apple,banana,orange";
let fruitArray = message.split(",");
console.log("String:", message);
console.log("Split into array:", fruitArray);

// reverse() - Reverse array order (changes original)
let countdown = [1, 2, 3, 4, 5];
console.log("Original countdown:", countdown);
countdown.reverse();
console.log("Reversed countdown:", countdown);