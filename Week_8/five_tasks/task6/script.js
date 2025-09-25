document.getElementById("challenge1Btn").addEventListener("click", function() {

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
});


document.getElementById("challenge2Btn").addEventListener("click", function() {
    function formatPercentage(value) {
        return value.toFixed(1) + "%"
    }

console.log("Testing Decimal Numbers")
console.log(formatPercentage(40));
console.log(formatPercentage(15.5));
console.log(formatPercentage(55));
console.log(formatPercentage(30.99));
console.log(formatPercentage(8.2));
});


document.getElementById("challenge3Btn").addEventListener("click", function () {
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
});


document.getElementById("challenge4Btn").addEventListener("click", function () {
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
});


document.getElementById("challenge5Btn").addEventListener("click", function () {
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


