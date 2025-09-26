                            // Object Methods (Functions)
// Objects can contain functions - these are called "methods"
let calculator = {
    brand: "BasicCalc",

    // Method to add two numbers
    add: function(a, b) {
        return a + b;
    },

    // Modern shorthand syntax (no "function" keyword)
    subtract(a, b) {
        return a - b;
    },
    
    multiply(a, b) {
        return a * b;
    },

    // Method that uses object's own properties
    getBrand() {
        return this.brand;    // "this" refers to the calculator object
    }
};

console.log("Calculator brand:", calculator.getBrand());
console.log("5 + 3 =", calculator.add(5, 3));
console.log("5 - 3 =", calculator.subtract(5, 3));
console.log("5 × 3 =", calculator.multiply(5, 3));

console.log(""); // Empty line

// More practical example - a student object with methods
let student = {
    name: "Alice Johnson",
    scores: [85, 92, 78, 96],

    // Method to add a new score
    addScore(score) {
        this.scores.push(score);
        return `Added score ${score}. Total scores: ${this.scores.length}`;
    },

    // Method to calculate average
    getAverage() {
        let total = 0;
        for (let score of this.scores) {
            total+= score;
        }
        return total / this.scores.length
    },

    // Method to get student info
    getInfo() {
        let average = this.getAverage();
        return `${this.name}: Average ${average.toFixed(1)}% (${this.scores.length} tests)`
    }
};

console.log("Student info:", student.getInfo());
console.log(student.addScore(89));
console.log("Updated info:", student.getInfo());
console.log("All scores:", student.scores);

console.log(""); // Empty line


// Bank account example
let account = {
    holderName: "Sarah Wilson",
    balance: 1000,
    
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Deposited $${amount}. New balance: $${this.balance}`;
        }
        return "Invalid deposit amount";
    },
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return `Withdrew $${amount}. New balance: $${this.balance}`;
        }
        return "Invalid withdrawal";
    },
    
    getBalance() {
        return `${this.holderName}'s balance: $${this.balance}`;
    }
};

console.log(account.getBalance());
console.log(account.deposit(250));
console.log(account.withdraw(100));
console.log(account.getBalance());



// Array of student objects - very common pattern
let students = [
    {
        name: "Alice",
        age: 20,
        grade: 85,
        major: "Computer Science"
    },
    {
        name: "Bob", 
        age: 19,
        grade: 92,
        major: "Mathematics"
    },
    {
        name: "Charlie",
        age: 21,
        grade: 78,
        major: "Physics"
    }
];

console.log("All students:", students);

console.log(""); // Empty line

// Display each student
console.log("Student List:");
for (let student of students) {
    console.log(`${student.name}: ${student.grade}% (${student.major})`);
}

console.log(""); // Empty line

// Find students with high grades
let highPerformers = [];
for (let student of students) {
    if (student.grade >= 85) {
        highPerformers.push(student);
    }
}

console.log("High performers (≥85%):");
for (let student of highPerformers) {
    console.log(`  ${student.name}: ${student.grade}%`);
}

console.log(""); // Empty line

// Calculate average grade
let totalGrade = 0;
for (let student of students) {
    totalGrade += student.grade;
}
let averageGrade = totalGrade / students.length;
console.log(`Class average: ${averageGrade.toFixed(1)}%`);

console.log(""); // Empty line

// Add a new student
let newStudent = {
    name: "Diana",
    age: 20,
    grade: 88,
    major: "Chemistry"
};

students.push(newStudent);
console.log(`Added ${newStudent.name}. Total students: ${students.length}`);

console.log(""); // Empty line

// Update a student's grade
for (let student of students) {
    if (student.name === "Charlie") {
        student.grade = 85;  // Charlie improved!
        console.log(`Updated ${student.name}'s grade to ${student.grade}%`);
        break;
    }
}

console.log("Updated student list:");
for (let student of students) {
    console.log(`${student.name}: ${student.grade}%`);
}
