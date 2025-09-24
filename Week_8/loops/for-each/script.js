                        // Array Methods That Use Functions

//                         Array Methods Summary:**
// - **forEach()** - Do something with each item (no return)
// - **map()** - Transform each item, return new array
// - **filter()** - Keep items that pass test, return new array  
// - **find()** - Return first item that passes test



// Modern array methods that make processing easier
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Original numbers:", numbers);
console.log(""); // Empty line

// forEach() - Do something with each element
console.log("Using forEach to print each number:");
numbers.forEach(function(number) {
    console.log("Number:", number);
});

console.log(""); // Empty line

// More concise with arrow function
console.log("forEach with arrow function:");
numbers.forEach(number => console.log(`Value: ${number}`));

console.log(""); // Empty line

// map() - Transform each element and create new array
console.log("Using map to double each number:");
let doubled = numbers.map(function(number) {
    return number * 2;
});
console.log("Doubled:", doubled);

// Shorter arrow function version
let tripled = numbers.map(number => number * 3);
console.log("Tripled:", tripled);

console.log(""); // Empty line

// filter() - Keep only elements that meet condition
console.log("Using filter to get even numbers:");
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log("Even numbers:", evenNumbers);

// Get odd numbers with arrow function
let oddNumbers = numbers.filter(number => number % 2 === 1);
console.log("Odd numbers:", oddNumbers);

console.log(""); // Empty line

// find() - Get first element that meets condition
let firstBigNumber = numbers.find(number => number > 5);
console.log("First number > 5:", firstBigNumber);