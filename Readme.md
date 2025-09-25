if (!/[a-zA-Z]/.test(password)) { ... }

/[a-zA-Z]/ is a regular expression (regex).

a-z → lowercase letters

A-Z → uppercase letters

Together means: any alphabet character.

.test(password) checks if the password contains at least one alphabet.

! (NOT) means we flip the result:

If no alphabet is found → return "Password must contain at least one alphabet".
⚡ Example: "12345678" fails here.

if (!/[0-9]/.test(password)) { ... }

/[0-9]/ is a regex that looks for any digit (0–9).

.test(password) → true if the password has a number.

! means → if no number is found, return:
"Password must contain at least one number".
⚡ Example: "opeyemiteminikan" fails here.

if (!/[@$!%*?&#]/.test(password)) { ... }

/[@$!%*?&#]/ is a regex that looks for special characters from this set:
@ $ ! % * ? & #

.test(password) → true if at least one of these symbols exists.

! means → if none is found, return:
"Password must contain at least one special character like @".
⚡ Example: "abc123" fails here.

Summary:

/.../ → defines a regex.

[ ] → defines a character set (any one character from the range).

[a-zA-Z] → “any single uppercase or lowercase letter.”

Without [ ], regex looks for the literal string "a-zA-Z", not letters.






number 3

Explanation (each line)

document.getElementById("challenge3Btn")

Finds the DOM element whose id is "challenge3Btn".

If no element with that id exists, this returns null (and calling .addEventListener on null would throw an error).

.addEventListener("click", function () {

Attaches a click event listener to that element.

The second argument is an anonymous function (the callback). Everything inside this { ... } runs only when the button is clicked.

function calculateCompoundInterest(principal, rate, years) {

Declares a function named calculateCompoundInterest that accepts three parameters:

principal (P), rate (r), years (t).

This function is nested inside the click handler, so it exists only when that handler is running (you could also declare it outside — both work).

let p = Number(principal);

Converts principal to a Number value and stores it in p.

Number(...) is used so strings like "1000" become 1000.

If conversion fails (e.g., "abc"), p becomes NaN.

let r = Number(rate);

Converts rate to a numeric value and stores it in r.

Example: "5" → 5, "0.07" → 0.07.

let t = Number(years);

Converts years to a number and stores it in t.

if (r > 1) {

Tests whether r is greater than 1.

This is a convenient check to detect when the user gave the rate as a percent like 5 (meaning 5%) rather than decimal 0.05.

r = r / 100;

If r was a whole percent (e.g. 5), this converts it to decimal (e.g. 0.05) by dividing by 100.

}

Closes the if block.

let a = p * Math.pow((1 + r), t);

Uses the compound interest formula A = P * (1 + r)^t.

Math.pow((1 + r), t) computes (1 + r) raised to the t power.

The result is multiplied by p to get the final amount a.

return a.toFixed(2);

toFixed(2) formats the number with exactly two decimal places (useful for currency).

Important: toFixed() returns a string, not a number (e.g. "1628.89").

If a is NaN, .toFixed will throw an error — so input validation can be useful.

}

Closes the calculateCompoundInterest function.

console.log(calculateCompoundInterest(1000, 5, 10));

Calls the function with principal=1000, rate=5 (which gets converted to 0.05), and years=10.

Logs the returned string (e.g. "1628.89") to the console. This call happens only when the button is clicked (because it sits inside the click handler).

console.log(calculateCompoundInterest(5000, 0.07, 5));

Calls the function with principal=5000, rate=0.07 (already decimal), and years=5.

Logs the returned string (e.g. "7012.76") to the console on click.

});

C