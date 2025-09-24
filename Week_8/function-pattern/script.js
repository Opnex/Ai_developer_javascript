                // Common Function Patterns
// Pattern 1: Validation function
function isValidated(email) {
    return email.includes('@') && email.includes(".");
}

// Pattern 2: Formatter function
function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

// Pattern 3: Decision maker function
function shouldBuyItem(price, budget, necessity) {
    if (necessity === "essential") {
        return price <= budget;
    } else if (necessity === "important") {
        return price <= budget * 0.7;
    } else {
        return price <= budget * 0.3;
    }
}

// Pattern 4: Data processor function
function analyzeGrades(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    const average = total / grades.length;
    const highest = Math.max(...grades);
    const lowest = Math.min(...grades);
    
    return {
        average: average.toFixed(1),
        highest: highest,
        lowest: lowest,
        letterGrade: average >= 90 ? "A" : average >= 80 ? "B" : average >= 70 ? "C" : "F"
    };
}

// Test all patterns
console.log("Function Pattern Examples:");
console.log(""); // Empty line

console.log("Email validation:");
console.log(isValidated("user@example.com")); // true
console.log(isValidated("invalid-email"));    // false

console.log(""); // Empty line

console.log("Currency formatting:");
console.log(formatCurrency(1234.5));  // $1234.50

console.log(""); // Empty line

console.log("Purchase decision:");
console.log("$100 item, $500 budget, essential:", shouldBuyItem(100, 500, "essential"));
console.log("$100 item, $500 budget, luxury:", shouldBuyItem(100, 500, "luxury"));

console.log(""); // Empty line

console.log("Grade analysis:");
const studentGrades = [88, 92, 76, 94, 89];
const analysis = analyzeGrades(studentGrades);
console.log(`Average: ${analysis.average}% (${analysis.letterGrade})`);
console.log(`Range: ${analysis.lowest} - ${analysis.highest}`);
