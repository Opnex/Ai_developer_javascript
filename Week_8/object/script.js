// What Are Objects?

let names = "Alice";
let age = 20;
let grade = 85;

console.log("Separate variables:");
console.log("Name: ", names);
console.log("Name: ", age);
console.log("Name: ", grade);

console.log(""); // Empty 

// Objects group related data together:
let student = {
    name: "Alice",
    age: 20,
    grade: 85
};

console.log("Object:");
console.log("Student object:", student);
console.log("Student name:", student.name);
console.log("Student age:", student.age);
console.log("Student grade:", student.grade);


console.log(""); // Empty line



// Objects are much cleaner for related data
let car = {
    make: "Toyota",
    model: "Camry", 
    year: 2020,
    color: "blue"
};

console.log("Car info:");
console.log(`Car: ${car.year} ${car.make} ${car.model} (${car.color})`);


                // Creating and Accessing Objects
// Creating objects
let person = {
    firstName: "John",
    lastName: "Doe", 
    age: 30,
    city: "Boston"
};

let product = {
    name: "Laptop",
    price: 999,
    inStock: true,
    category: "Electronics"
};

console.log("Person object:", person);
console.log("Product object:", product);

console.log(""); // Empty line


                        // Two ways to access properties:
// 1. Dot notation (most common)
console.log("Using dot notation:");
console.log("First name:", person.firstName);
console.log("Product name:", product.name);
console.log("Product price:", product.price);

console.log(""); // Empty line

// 2. Bracket notation (for dynamic access)
console.log("Using bracket notation:");
console.log("Last name:", person["lastName"]);
console.log("In stock:", product["inStock"]);

// Bracket notation useful for dynamic property names
let propertyName = "city";
console.log("City:", person[propertyName]);

console.log(""); // Empty line


// Building strings with object properties
console.log("Formatted output:");
console.log(`${person.firstName} ${person.lastName} is ${person.age} years old and lives in ${person.city}.`);
console.log(`The ${product.name} costs $${product.price} and is ${product.inStock ? "available" : "out of stock"}.`);


                        // Modifying Objects
// Creating a book object
let book = {
    title: "JavaScript Basics",
    author: "Jane Smith",
    pages: 200,
    isRead: false
};


console.log("Original book:", book);

console.log(""); // Empty line

// Modifying existing properties
book.pages = 250;           // Update page count
book.isRead = true;         // Mark as read
book.author = "Jane Doe";   // Update author

console.log("After modifications:", book);

console.log(""); // Empty line

// Adding new properties
book.genre = "Programming";     // Add genre
book.rating = 4.5;             // Add rating
book.publishYear = 2023;       // Add publish year

console.log("After adding properties:", book);

console.log(""); // Empty line

delete book.isRead;   // Remove the isRead property

console.log("After removing isRead:", book);

console.log(""); // Empty line


// Working with a user profile
let user = {
    username: "john_doe",
    email: "john@example.com"
};

console.log("Initial user:", user);

// Add more user info
user.firstName = "John";
user.lastName = "Doe";
user.age = 25;
user.isActive = true;

console.log("Updated user:", user);

// Update email
user.email = "john.doe@newcompany.com";
console.log("User with new email:", user);

