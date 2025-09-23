function showArithmeticOperators() {
    let a = 10;
    let b = 3;
    
    let addition = a + b;        // 13
    let subtraction = a - b;     // 7
    let multiplication = a * b;  // 30
    let division = a / b;        // 3.333...
    let remainder = a % b;       // 1
    let exponentiation = a ** b; // 1000
    
    let output = `
        <strong>Arithmetic Operators:</strong><br><br>
        a = ${a}, b = ${b}<br><br>
        Addition (a + b): ${addition}<br>
        Subtraction (a - b): ${subtraction}<br>
        Multiplication (a * b): ${multiplication}<br>
        Division (a / b): ${division.toFixed(3)}<br>
        Remainder/Modulo (a % b): ${remainder}<br>
        Exponentiation (a ** b): ${exponentiation}<br><br>
        <em>% gives remainder, ** is exponentiation (ES2016)</em>
    `;
    
    document.getElementById('operators-output').innerHTML = output;
}
