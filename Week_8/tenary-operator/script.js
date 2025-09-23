                    // Examples:
// // Instead of:
// if (age >= 18) {
//     statuss = "adult";
// } else {
//     statuss = "minor";
// }

// You can write:
// let age = 10;
// statuss = age >= 18 ? "adult" : "minor";
// console.log(statuss)

// function getAge(age) {
//     return age >= 18 ? "adult" : "minor"
// }
// console.log(getAge(20));
// console.log(getAge(10));



let age = 20;
let temperature = 85;
let score = 92;
let isLoggedIn = true;

// Basic ternary operator usage
let statuss = age >= 18 ? "adult" : "minor";
console.log(`status: ${statuss}`);

// Ternary in template literals
let greeting = `Good ${temperature > 80 ? "hot" : "nice"} day!`
console.log(greeting);

// Ternary for function calls
let message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(message);

// Multiple ternary operators (be careful - can get confusing)
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(`Grade: ${grade}`);


// Function using ternary operator
function getShippingCost(orderAmount, isPremium) {
    return orderAmount > 50 ? 0 : isPremium ? 5 : 10;
}

console.log("Shipping examples:");
console.log(`$30 order, regular: $${getShippingCost(30, false)}`);
console.log(`$30 order, premium: $${getShippingCost(30, true)}`);
console.log(`$60 order, regular: $${getShippingCost(60, false)}`);

console.log(""); // Empty line

// Ternary in arrays and objects
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 16 },
    { name: "Charlie", age: 30 }
];

users.forEach(user => {
    let canVote = user.age >= 18 ? "Yes" : "No";
    console.log(`${user.name} (${user.age}) can vote: ${canVote}`);
});
