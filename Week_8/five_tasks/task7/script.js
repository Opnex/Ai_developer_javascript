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