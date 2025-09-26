                            // TASK1
let score = 30;
let expectedMark = 50;
let markObtainable = 100;

function getGrade() {
    if (score >= 100) {
        console.log(`Outstanding! Grade: A+! You scored ${score}%  over ${markObtainable}%`);
    } else if (score >= 90) {
        console.log(`Congratulations! You scored ${score}%`);
    } else if (score >= 80){
        console.log(`Excellent! You scored ${score}%`);
    } else if (score >= 70){
        console.log(`Good! You scored ${score}%`);
    } else if (score >= 60){
        console.log(`Need Improvement! You scored ${score}%`);
    } else if (score >= 50){
        console.log(`Fair! You scored ${score}%`);
    } else {
        console.log(`Sorry, you score below expected score ${score}. You need ${expectedMark}% to pass.`);
    }
}


                                TASK2
// Function that calculates discounts
function calculatePrice(price, customerType, isFirstPurchase) {
    let discount = 0;
    
    if (customerType === "student") {
        discount = 0.10;
    } else if (customerType === "senior") {
        discount = 0.15;
    } else if (customerType === "employee") {
        discount = 0.20;
    }
    
    // Additional discount for first-time customers
    if (isFirstPurchase) {
        discount += 0.05;
    }
    
    let finalPrice = price * (1 - discount);
    return {
        originalPrice: price,
        discountPercent: discount * 100,
        finalPrice: finalPrice.toFixed(2)
    };
}

// Test discount function
let result = calculatePrice(100, "student", true);
console.log("Price calculation:");
console.log(`Original: $${result.originalPrice}`);
console.log(`Discount: ${result.discountPercent}%`);
console.log(`Final price: $${result.finalPrice}`);


                                                        // Task3
let temperature = 85;
let isRainiing = true;

function WeatherAdvisor() {
    if (temperature < 32 && isRainiing) {
    console.log("Freezing rain! Stay inside!");
} else if (temperature < 32) {
    console.log("Very cold, wear a heavy coat.");
} else if (temperature < 32 - 60 ) {
    console.log("Chilly. Bring a jacket.");
} else if (temperature < 60 - 80) {
    console.log("Nice weather!");
} else if (temperature > 80 ) {
    console.log("It's hot, stay hydrated!")
} else {
    console.log("It's hot, stay hydrated!");
}

}


                                                                        // TASK4
let myBalance = 15000;

function atm(balance, action, amount) {
    if (action === "withdraw") {
        if (amount > balance) {
            console.log("Insufficient funds");
            return balance;
        } else if (amount > 500) {
            console.log("Withdrawal limit at once exceeded. Maximum withdrawal per transaction is 500");
            return balance;
        } else {
            balance -= amount;
            console.log(`Withdrawal successful. New balance: ${balance}`);
            return balance;
        }
    } else if (action === "deposit") {
        if (amount <= 0) {
            console.log("Invalid amount");
            return balance;
        } else {
            balance += amount;
            console.log(`Deposit successful. New balance: ${balance}`);
            return balance;
        }
    } else {
        console.log("Invalid action. Use 'withdraw' or 'deposit'");
        return balance;
    }
}


// Successful withdrawal
myBalance = atm(myBalance, "withdraw", 5000);

// Attempt to withdraw more than balance
myBalance = atm(myBalance, "withdraw", 20000);

// Attempt to withdraw more than 500 limit
myBalance = atm(myBalance, "withdraw", 1000);




                                                                        // TASK5
function personalAssistant(time, weather, day) {
  let message = day === "workday" ? "Get focused for work!" :
                day === "weekend" ? "Chill out, it's the weekend!" :
                day === "holiday" ? "Happy holiday!" : "Invalid day type.";
  message += (weather === "rainy") ? " Don't forget your umbrella." :
             (weather === "sunny") ? " Grab some sunscreen if you're heading out." :
             (weather === "cloudy") ? " Might be a chill day." : " Weather condition not recognized.";
  if (time < 12 && time >= 0) {
    message += " Have a great morning!";
  } else if (time >= 12 && time < 18) {
    message += " Have a productive afternoon!";
  } else if (time >= 18 && time <= 23) {
    message += " Wind down for the evening.";
  } else {
    message += " Invalid time.";
  }
  console.log(message);
}

