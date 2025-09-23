// Function that uses conditionals to make decisions
function checkPassword(password) {
    if (password.length < 8) {
        return "Password too short! Must be at least 8 characters.";
    } else if (password === "password" || password === "123456") {
        return "Password too common! Choose something more secure.";
    } else if (password.length > 20) {
        return "Password too long! Keep it under 20 characters.";
    } else {
        return "Password looks good!";
    }
}

// Test the password function
console.log("Testing password: ");
console.log(checkPassword("password"));
console.log(checkPassword("mySecurePass123"));
console.log(checkPassword("thisPasswordIsWayTooLongToBeUseful"));



// Function that categorizes age groups
function getAgeGroup(age) {
    if (age < 0) {
        return "Invalid age";
    } else if (age < 13 ) {
        return "Child";
    } else if (age < 20) {
        return "Teenager";
    } else if (age < 60) {
        return "Adult"
    } else {
        return "Senior"
    }
}

// Test age groups
let ages = [0, 5, 13, 16, 20, 25, 45, 67];
ages.forEach(age => {
    console.log(`Age ${age}: ${getAgeGroup(age)}`);
});


// Function that calculates discounts
function  calculateDiscount(price, customerType, isFirstTime) {
    let discount = 0;

    if (customerType === "student") {
        discount = 0.10;   // 10% discount
    } else if (customerType === "senior") {
        discount = 0.15; // 15% discount
    } else if (customerType === "employee") {
        discount = 0.20; // 20% discount
    }

    // Additional discount for first-time customers
    if (isFirstTime) {
        discount += 0.05; // Extra 5%
    }

    let finalPrice = price * (1 - discount);
    return {
        originalPrice: price,
        discountPercent: discount * 100,
        finalPrice: finalPrice.toFixed(2)
    }
}

// Test discount function
let result = calculateDiscount(100, "student", true);
console.log("Price calculation:");
console.log(`Original: $${result.originalPrice}`);
console.log(`Discount: ${result.discountPercent}%`);
console.log(`Final price: $${result.finalPrice}`);