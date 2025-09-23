                        // Introduction to Conditional Statements
// ### Types of Conditional Statements:
// 1. **if statement** - Do something if condition is true
// 2. **if...else statement** - Do one thing if true, another if false
// 3. **if...else if...else** - Multiple conditions to check
// 4. **Ternary operator** - Short way to write simple if/else

// ### Basic Structure:
// ```javascript
// if (condition) {
//     // code to run if condition is true
// } else {
//     // code to run if condition is false
// }


                                // Basic If Statements
let age = 25;
let temperature = 75;
let isRaining = false;

// Simple if statement
if (age >= 18) {
    console.log("You are an adult!");
}

// If...else statement
if (temperature > 80) {
    console.log("It's hot today!");
} else {
    console.log("The weather is nice!");
}

// Another if...else
if (isRaining) {
    console.log("Don't forget your umbrella!");
} else {
    console.log("No umbrella needed today!");
}

console.log(""); // Empty line

// Using variables in conditions
let score = 85;
let passingGrade = 70;

if (score >= passingGrade) {
    console.log(`Congratulations! You passed with ${score}%`);
} else {
    console.log(`Sorry, you scored ${score}%. You need ${passingGrade}% to pass.`);
}


                                // Multiple Conditions with else if
let grade = 87;

// Multiple conditions with else if
if (grade >= 90) {
    console.log("Grade: A - Excellent!");
} else if (grade >= 80) {
    console.log("Grade: B - Good work!");
} else if (grade >= 70) {
    console.log("Grade: C - Satisfactory");
} else if (grade >= 60) {
    console.log("Grade: D - Needs improvement");
} else {
    console.log("Grade: F - Please see instructor");
}

console.log(""); // Empty line

// Weather decision system
let temperatures = 45;
let isSnowing = false;

if (temperatures < 32 && isSnowing) {
    console.log("Bundle up! It's freezing and snowing!");
} else if (temperatures < 32) {
    console.log("It's freezing! Wear a heavy coat!");
} else if (temperatures < 50) {
    console.log("It's chilly. A jacket would be good.");
} else if (temperatures < 70) {
    console.log("Nice weather! A light sweater is perfect.");
} else {
    console.log("It's warm! T-shirt weather!");
}

console.log(""); // Empty line

// Time-based greeting
let hour = 14; // 24-hour format (2 PM)

if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}