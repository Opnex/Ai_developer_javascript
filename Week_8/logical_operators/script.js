                            // Logical Operators Examples

let age = 22;
let hasLicense = true;
let hasInsurance = false;
let isWeekend = true;
let isHoliday = false;
let weather = "sunny";

// AND operator (&&) - both conditions must be true
if (age >= 18 && hasLicense) {
    console.log("You can drive!");
} else {
    console.log("You cannot drive yet.");
}

// Multiple AND conditions
if (age >= 18 && hasLicense && hasInsurance) {
    console.log("You can drive legally!");
} else {
    console.log("You're missing something to drive legally.");
}

console.log(""); // Empty line

// OR operator (||) - at least one condition must be true
if (isWeekend || isHoliday) {
    console.log("No work today!");
} else {
    console.log("Time to work!");
}

// NOT operator (!) - flips the boolean value
if (!hasInsurance) {
    console.log("Warning: You don't have insurance!");
}

console.log(""); // Empty line

// Combining different logical operators
if ((isWeekend || isHoliday) && weather === "sunny") {
    console.log("Perfect day for a picnic!");
}

// Complex condition example
let temperature = 75;
let humidity = 40;

if (temperature >= 70 && temperature <= 85 && humidity < 60 && !isRaining) {
    console.log("Perfect weather conditions!");
} else {
    console.log("Weather could be better.");
}
