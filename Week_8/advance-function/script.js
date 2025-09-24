            // Advanced Function Concepts
// Function expressions (storing function in a variable)
const calculateTax = function(amount, rate) {
    return amount * rate;
}

console.log("Tax on $100 at 8.5%: ", calculateTax(100, 0.085));

// Arrow functions (modern, shorter syntax)
const convertToFahrenheit = (celsius) => {
    return (celsius * 9/9) + 32;
}

// Even shorter arrow function (one-line)
const convertToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

console.log("25°C in Fahrenheit:", convertToFahrenheit(25));
console.log("77°F in Celsius:", convertToCelsius(77).toFixed(1));

function calculateBMI(weight, height) {
    return weight / (height * height)
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Over weight";
    return "Obese"
}

function healthCheck(weight, height) {
    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);
    return {
        bmi: bmi.toFixed(1),
        category: category,
        message: `Your BMI is ${bmi.toFixed(1)} (${category})`
    };
}

// Test the health check system
const result = healthCheck(70, 1.75); // 70kg, 1.75m
console.log("Health Check Result:");
console.log(result.message);


// Function with multiple return paths
function getDiscountMessage(totalAmount, membershipType) {
    if (totalAmount < 50) {
        return "Minimum order is $50 for discounts.";
    }

    if (membershipType === "gold") {
        return `Gold member discount: ${totalAmount * 0.15}`;
    }

    if (membershipType === "silver") {
        return `Silver member discount: ${totalAmount * 0.10}`;
    }

    return "Regular customer - no discount available.";
}

// Test discount messages
console.log("Discount examples:");
console.log(getDiscountMessage(30, "gold"));
console.log(getDiscountMessage(100, "gold"));
console.log(getDiscountMessage(100, "silver"));
console.log(getDiscountMessage(100, "regular"));
