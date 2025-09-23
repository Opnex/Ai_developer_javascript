function exploreStrings() {
    // Different ways to create strings
    let singleQuotes = 'Hello World';
    let doubleQuotes = "JavaScript is fun";
    let templateLiteral = `Today is ${new Date().toDateString()}`;
    
    // String properties and methods
    let message = "Learning JavaScript";
    let length = message.length;
    let uppercase = message.toUpperCase();
    let lowercase = message.toLowerCase();
    
    let output = `
        <strong>Working with Strings:</strong><br><br>
        Single quotes: '${singleQuotes}'<br>
        Double quotes: "${doubleQuotes}"<br>
        Template literal: \`${templateLiteral}\`<br><br>
        <strong>String Methods:</strong><br>
        Original: "${message}"<br>
        Length: ${length} characters<br>
        Uppercase: "${uppercase}"<br>
        Lowercase: "${lowercase}"<br><br>
        <em>Template literals (\`) allow embedding variables with \${}</em>
    `;
    
    document.getElementById('datatypes-output').innerHTML = output;
}


function exploreNumbers() {
    // Different number types
    let integer = 42;
    let decimal = 3.14159;
    let negative = -17;
    let scientific = 2.5e6; // 2,500,000
    
    // Math operations
    let sum = 10 + 5;
    let difference = 20 - 8;
    let product = 6 * 7;
    let quotient = 15 / 3;
    let remainder = 17 % 5;
    
    // Special number values
    let infinity = 1 / 0;
    let notANumber = "hello" * 5;
    
    let output = `
        <strong>Working with Numbers:</strong><br><br>
        Integer: ${integer}<br>
        Decimal: ${decimal}<br>
        Negative: ${negative}<br>
        Scientific notation: ${scientific}<br><br>
        <strong>Math Operations:</strong><br>
        10 + 5 = ${sum}<br>
        20 - 8 = ${difference}<br>
        6 × 7 = ${product}<br>
        15 ÷ 3 = ${quotient}<br>
        17 % 5 = ${remainder} (remainder)<br><br>
        <strong>Special Values:</strong><br>
        1 / 0 = ${infinity}<br>
        "hello" * 5 = ${notANumber}<br>
    `;
    
    document.getElementById('datatypes-output').innerHTML = output;
}


function exploreBooleans() {
    // Boolean values
    let isTrue = true;
    let isFalse = false;
    
    // Boolean from comparisons
    let isGreater = 10 > 5;        // true
    let isEqual = 5 === 5;         // true
    let isNotEqual = 3 !== 7;      // true
    let isLessOrEqual = 4 <= 4;    // true
    
    // Truthy and falsy values
    let truthyString = Boolean("hello");    // true
    let falsyString = Boolean("");          // false
    let truthyNumber = Boolean(42);         // true
    let falsyNumber = Boolean(0);           // false
    
    let output = `
        <strong>Working with Booleans:</strong><br><br>
        <strong>Direct Boolean Values:</strong><br>
        isTrue: ${isTrue}<br>
        isFalse: ${isFalse}<br><br>
        <strong>Boolean from Comparisons:</strong><br>
        10 > 5: ${isGreater}<br>
        5 === 5: ${isEqual}<br>
        3 !== 7: ${isNotEqual}<br>
        4 <= 4: ${isLessOrEqual}<br><br>
        <strong>Truthy vs Falsy:</strong><br>
        Boolean("hello"): ${truthyString}<br>
        Boolean(""): ${falsyString}<br>
        Boolean(42): ${truthyNumber}<br>
        Boolean(0): ${falsyNumber}<br><br>
        <em>Empty strings, 0, null, undefined are "falsy"</em>
    `;
    
    document.getElementById('datatypes-output').innerHTML = output;
}


function exploreSpecialValues() {
    // Undefined variable
    let undefinedVar;
    
    // Null value
    let nullVar = null;
    
    // Check types
    let definedVar = "I have a value";
    
    let output = `
        <strong>Special Values:</strong><br><br>
        <strong>Undefined:</strong><br>
        Value: ${undefinedVar}<br>
        Type: ${typeof undefinedVar}<br><br>
        <strong>Null:</strong><br>
        Value: ${nullVar}<br>
        Type: ${typeof nullVar} (this is a JavaScript quirk!)<br><br>
        <strong>Defined Variable:</strong><br>
        Value: "${definedVar}"<br>
        Type: ${typeof definedVar}<br><br>
        <strong>Key Differences:</strong><br>
        • undefined: Variable exists but has no value<br>
        • null: Intentionally set to "no value"<br>
        • Both are "falsy" in boolean context
    `;
    
    document.getElementById('datatypes-output').innerHTML = output;
}
