                                // Your First For Loop
// Basic for loop structure:
// for (initialization; condition; increment) {
//     code to repeat
// }


// **For Loop Parts:**
// - **Initialization**: `let i = 1` - Set up counter variable
// - **Condition**: `i <= 5` - Keep looping while this is true
// - **Increment**: `i++` - Change counter each time
// - **Body**: Code inside `{}` - What to repeat


// Simple counting loop
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i)
}

console.log(""); // Empty line

// Counting backwards
console.log("Countdown from 5 to 1:");
for (let i = 5; i >= 1; i--) {
    console.log("Countdown:", i);
}
console.log("Blast off!");

console.log(""); // Empty line

// Using loops with calculations
console.log("Multiplication table for 3:");
for (let i = 1; i <= 10; i++) {
    let result = 3 * i;
    console.log(`3 x ${i} = ${result}`);
}

console.log(""); // Empty line

// Loop with different step sizes
console.log("Even numbers from 2 to 10:");
for (let i = 2; i <= 10; i += 2) {  // i += 2 means i = i + 2
    console.log("Even number:", i);
}

console.log(""); // Empty line

// Loop through an array using index
let colors = ["red", "green", "blue", "yellow"];
console.log("Colors in the array:");
for (let i = 0; i < colors.length; i++) {
    console.log(`Color ${i + 1}: ${colors[i]}`);
}