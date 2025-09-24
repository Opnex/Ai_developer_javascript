                                // While Loops

//                                 While Loop Key Points:**
// - **Condition checked first** - May never run if condition is false
// - **Must change condition variable** - Or you get infinite loop!
// - **do...while** - Runs at least once, checks condition at end
// - **Use for unknown number of iterations** - When you don't know how many times to loop



// While loop - repeats as long as condition is true
// while (condition) {
//     code to repeat
// }

console.log("Basic while loop - counting to 5:");
let count = 1;
while (count <= 5) {
    console.log("Count is:", count);
    count++; // IMPORTANT: Must change the condition variable!
}

console.log(""); // Empty line

// While loop processing array until condition met
let numbers = [2, 4, 6, 8, 3, 10, 12];
let i = 0;
let foundOdd = false;

console.log("Looking for first odd number:");
while (i < numbers.length && !foundOdd) {
    console.log(`Checking ${numbers[i]}...`);
    
    if (numbers[i] % 2 === 1) {  // Check if odd
        console.log(`Found odd number: ${numbers[i]}`);
        foundOdd = true;
    } else {
        console.log(`${numbers[i]} is even, continuing...`);
    }
    
    i++;
}

if (!foundOdd) {
    console.log("No odd numbers found!");
}

console.log(""); // Empty line

// do...while loop - runs at least once
let number = 1;

do {
    console.log("Number is: " + number);
    number++;
} while (number <= 3);

console.log("Loop finished!");