// ### Function Structure:
     
// Function declaration - creating the function
function sayHello() {
    console.log("Hello from my first function!");
}

// Function call - using the function
sayHello();

// You can call it multiple times
sayHello();
sayHello();

console.log(""); // Empty line

// Another simple function
function showCurrentTime() {
    let now = new Date();
    console.log(`Current time: ${now.toLocaleTimeString()}`);
}

// Call the time function
showCurrentTime()



                                // Functions with Parameters

// Function with one parameter
function greetPerson(name) {
    console.log(`Hello, ${name}! Welcome to JavaScript!`);
}

// Call with different values
greetPerson("Alice");
greetPerson("Bob");
greetPerson("Charlie");

console.log(""); // Empty line

// Function with multiple parameters
function introduce(firstName, lastName, age) {
    console.log(`Hi! I'm ${firstName} ${lastName} and I'm ${age} years old.`);
}

// Call with multiple arguments
introduce("Jane", "Smith", 25);
introduce("John", "Doe", 30);
introduce("Sarah", "Johnson", 22);

console.log(""); // Empty line

// Function with default parameter
function greetWithDefault(name = "Friend") {
    console.log(`Hello, ${name}!`);
}

greetWithDefault("Maria");  // Uses provided name
greetWithDefault();        // Uses default "Friend"



                                            // Functions with Return Values
// Function that returns a calculated value
function addNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}

// Store the returned value in a variable
let sum = addNumbers(5, 3);
console.log("Sum:", sum);

// Use the returned value directly
console.log("10 + 7 =", addNumbers(10, 7));

console.log(""); // Empty line

// Function that returns processed text
function createFullName(first, last) {
    return `${first} ${last}`.trim();
}

let fullName = createFullName("John", "Doe");
console.log("Full name:", fullName);

console.log(""); // Empty line

// Function that returns a boolean
function isAdult(age) {
    return age >= 18;
}

console.log("Is 16 adult?", isAdult(16));
console.log("Is 21 adult?", isAdult(21));

// Use return value in other code
let userAge = 20;
if (isAdult(userAge)) {
    console.log("User can vote!");
} else {
    console.log("User cannot vote yet.");
}





                                        // More Function Examples
// Calculator functions
function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
}

function calculateArea(length, width) {
    return length * width;
}

// Test the calculator functions
console.log("Multiply 6 × 4 =", multiply(6, 4));
console.log("Divide 15 ÷ 3 =", divide(15, 3));
console.log("Divide 15 ÷ 0 =", divide(15, 0));
console.log("Area of 5×3 room =", calculateArea(5, 3), "square units");
