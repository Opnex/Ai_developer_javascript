                                                                    // TASK6
document.getElementById("task6").addEventListener("click", function() {

function isStrongPassword(password) {
    if (password.length < 8) {
        return "Password must be at least 8 characters";
    }
    if (!/[a-zA-Z]/.test(password)) {
        return "Password must contain at least one alphabet";
    }
    if (!/[0-9]/.test(password)) {
        return "Password must contain at least one number";
    }
    if (!/[@$!%*?&#]/.test(password)) {
        return "Password must contain at least one special character like @";
    }
    return "Safe Password";
}

console.log("Testing Password");
console.log(isStrongPassword("ope"));           
console.log(isStrongPassword("12345678"));     
console.log(isStrongPassword("opeyemiteminikan")); 
console.log(isStrongPassword("opeyemi5454")); 
console.log(isStrongPassword("opeyemi@5454"));




    function formatPercentage(value) {
        return value.toFixed(1) + "%"
    }

console.log("Testing Decimal Numbers")
console.log(formatPercentage(40));
console.log(formatPercentage(15.5));
console.log(formatPercentage(55));
console.log(formatPercentage(30.99));
console.log(formatPercentage(8.2));



    function calculateCompoundInterest(principal, rate, years) {
        let p = Number(principal);
        let r = Number(rate);
        let t = Number(years);

        if (r > 1) {
            r = r / 100;
        }

        let a = p * Math.pow((1 + r), t);

        return a.toFixed(2);
    }

console.log(calculateCompoundInterest( 1000, 5, 10));
console.log(calculateCompoundInterest(5000, 0.07, 5));



    function canGraduate(credits, gpa) {
            if (credits < 120 || gpa < 2.0 ) {
                return "you must score 120 and have 2.0 gpa to graduate ";
            } else {
                return "Congratulation you van graduate";
            }
    }

console.log("Testing Can Graduate")
console.log(canGraduate(100, 1.8));
console.log(canGraduate(110, 1.9));
console.log(canGraduate(120, 2.0));



    function reverseWords(sentence) {
        return sentence
            .split(" ")
            .reverse()
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(" ");
    }
console.log("Testing Reveerse Words");
console.log(reverseWords("i love Javascript"));
console.log(reverseWords("javascript is fun but hard"));
console.log(reverseWords("let keep coding"));
});




                                                                            // TASK7
document.getElementById("task7").addEventListener("click", function() {
function productTotal(price, quantity, discount) {
  if (price <= 0 || quantity <= 0) return 0;
  let total = price * quantity;
  if (discount > 0) {
    total = total - (total * discount) / 100;
  }
  return total;
}


function taxCalculator(amount, location) {
  if (amount <= 0) return 0;
  let taxRate = 0;
  if (location === "US") taxRate = 0.07;
  else if (location === "EU") taxRate = 0.20;
  else taxRate = 0.10;
  return amount * taxRate;
}


function shippingCalculator(weight, distance) {
  if (weight <= 0 || distance <= 0) return 0;
  let cost = weight * distance * 0.05;
  return cost < 5 ? 5 : cost; // ternary: minimum $5
}


function membershipDiscount(amount, member) {
  if (amount <= 0) return 0;
  if (member === "gold") return amount * 0.1;
  else if (member === "silver") return amount * 0.05;
  else return 0;
}


function generateReceipt(price, quantity, discount, location, weight, distance, member) {
  let subtotal = productTotal(price, quantity, discount);
  let tax = taxCalculator(subtotal, location);
  let shipping = shippingCalculator(weight, distance);
  let memberSave = membershipDiscount(subtotal, member);
  let finalTotal = subtotal + tax + shipping - memberSave;

  console.log("----- Receipt -----");
  console.log("Subtotal: $" + subtotal.toFixed(2));
  console.log("Tax: $" + tax.toFixed(2));
  console.log("Shipping: $" + shipping.toFixed(2));
  console.log("Membership Savings: -$" + memberSave.toFixed(2));
  console.log("Final Total: $" + finalTotal.toFixed(2));
  console.log("-------------------");
}

// Testing
generateReceipt(50, 2, 10, "US", 3, 100, "gold");
})
