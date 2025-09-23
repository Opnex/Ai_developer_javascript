function showBasicVariables() {
    // Creating variables with different declarations
    let studentName = "Alice";
    const schoolName = "Tech Academy";
    let age = 25;
    
    // Display the variables
    let output = `
        <strong>Basic Variables:</strong><br>
        Student Name: ${studentName}<br>
        School Name: ${schoolName}<br>
        Age: ${age}<br><br>
        <em>studentName and age use 'let' (can be changed)<br>
        schoolName uses 'const' (cannot be changed)</em>
    `;
    
    document.getElementById('variables-output').innerHTML = output;
    console.log('Student:', studentName, 'Age:', age, 'School:', schoolName);
}

function showVariableTypes() {
    // Different data types
    let userName = "John Doe";           // String
    let userAge = 30;                    // Number
    let isActive = true;                 // Boolean
    let salary = 50000.50;              // Number (with decimals)
    let middleName = null;              // Null (intentionally empty)
    let nickname;                       // Undefined (not assigned)

    let output = `
        <strong>Variable Types:</strong><br>
        userName: "${userName}" (type: ${typeof userName})<br>
        userAge: ${userAge} (type: ${typeof userAge})<br>
        isActive: ${isActive} (type: ${typeof isActive})<br>
        salary: ${salary} (type: ${typeof salary})<br>
        middleName: ${middleName} (type: ${typeof middleName})<br>
        nickname: ${nickname} (type: ${typeof nickname})
    `;

    document.getElementById('variables-output').innerHTML = output;
}


function demonstrateConstVsLet() {
    let changeable = "I can be changed";
    const permanent = "I cannot be changed";
    
    // Change the let variable
    changeable = "I have been changed!";
    
    // Try to change const (this would cause an error)
    // permanent = "This would cause an error!"; // Don't uncomment this!

    let output = `
        <strong>const vs let:</strong><br>
        changeable (let): "${changeable}"<br>
        permanent (const): "${permanent}"<br><br>
        <em>The 'let' variable was successfully changed.<br>
        Trying to change a 'const' variable would cause an error!</em>
    `;
    
    document.getElementById('variables-output').innerHTML = output;
}


function variableNamingExamples() {
    // Good variable names (descriptive and follow conventions)
    let firstName = "Maria";
    let lastName = "Garcia";
    let phoneNumber = "555-0123";
    let isLoggedIn = true;
    let totalPrice = 99.99;
    
    // Examples of what NOT to do (but still valid)
    let a = "Bad name - not descriptive";
    let x123 = "Confusing name";
    
    let output = `
        <strong>Variable Naming Examples:</strong><br><br>
        <strong>Good Names (descriptive):</strong><br>
        firstName: ${firstName}<br>
        lastName: ${lastName}<br>
        phoneNumber: ${phoneNumber}<br>
        isLoggedIn: ${isLoggedIn}<br>
        totalPrice: $${totalPrice}<br><br>
        <strong>Poor Names (avoid these):</strong><br>
        a: "${a}"<br>
        x123: "${x123}"<br><br>
        <em>Use camelCase and descriptive names!</em>
    `;
    
    document.getElementById('variables-output').innerHTML = output;
}


