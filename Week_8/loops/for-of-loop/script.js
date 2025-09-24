                        // For...Of Loop and Array Processing

//                         **When to Use Each Loop:**
// - **for...of** - When you want each item, don't need index
// - **Traditional for** - When you need the index number
// - **Both work**, for...of is usually cleaner and easier to read


// for...of loop - easier way to go through array items
let fruits = ["apple", "banana", "orange", "grape"];

console.log("Using for...of loop:");
for (let fruit of fruits) {
    console.log("I like", fruit);
}

console.log(""); // Empty line

// Compare with traditional for loop
console.log("Using traditional for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log("I like", fruits[i]);
}

console.log(""); // Empty line

// Processing numbers with for...of
let scores = [85, 92, 78, 96, 88];
let total = 0;

console.log("Calculating average score:");
for (let score of scores) {
    console.log("Adding score:", score);
    total += score;  // Same as: total = total + score
}

let average = total / scores.length;
console.log(`Total: ${total}, Average: ${average.toFixed(1)}`);

console.log(""); // Empty line

// Using loops with conditions
let temperatures = [68, 72, 85, 90, 75, 82, 88];
let hotDays = 0;
let coldDays = 0;

console.log("Analyzing temperatures:");
for (let temp of temperatures) {
    if (temp >= 85) {
        hotDays++;
        console.log(`${temp}°F - Hot day!`);
    } else if (temp < 70) {
        coldDays++;
        console.log(`${temp}°F - Cold day!`);
    } else {
        console.log(`${temp}°F - Nice day!`);
    }
}

console.log(`Summary: ${hotDays} hot days, ${coldDays} cold days`);

console.log(""); // Empty line

// Building new arrays with loops
let numbers = [1, 2, 3, 4, 5];
let doubled = [];

console.log("Doubling each number:");
for (let num of numbers) {
    let doubledValue = num * 2;
    doubled.push(doubledValue);
    console.log(`${num} × 2 = ${doubledValue}`);
}

console.log("Original:", numbers);
console.log("Doubled:", doubled);
