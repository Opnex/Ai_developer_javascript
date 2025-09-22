let selectedOperation = null;
        
        // Clear calculator on page load
        window.onload = function() {
            clearCalculator();
        };
        
        // Select operation when user clicks a button
        const operationButtons = document.querySelectorAll('.operation-btn');
        operationButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                operationButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Store the selected operation
                selectedOperation = this.getAttribute('data-operation');
            });
        });
        
        function calculate() {
            // Get the numbers from input fields
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const errorElement = document.getElementById('error');
            const resultElement = document.getElementById('result');
            const resultText = document.getElementById('result-text');
            
            // Reset error and result
            errorElement.style.display = 'none';
            resultElement.style.display = 'none';
            
            // Validate inputs
            if (isNaN(num1) || isNaN(num2)) {
                showError("Please enter valid numbers in both fields.");
                return;
            }
            
            if (selectedOperation === null) {
                showError("Please select an operation (+, -, ×, ÷, or %).");
                return;
            }
            
            // Perform calculation based on selected operation
            let result;
            let operationSymbol;
            
            switch(selectedOperation) {
                case '+':
                    result = num1 + num2;
                    operationSymbol = '+';
                    break;
                case '-':
                    result = num1 - num2;
                    operationSymbol = '-';
                    break;
                case '*':
                    result = num1 * num2;
                    operationSymbol = '×';
                    break;
                case '/':
                    if (num2 === 0) {
                        showError("Cannot divide by zero.");
                        return;
                    }
                    result = num1 / num2;
                    operationSymbol = '÷';
                    break;
                case '%':
                    if (num2 === 0) {
                        showError("Cannot calculate modulus with zero.");
                        return;
                    }
                    result = num1 % num2;
                    operationSymbol = '%';
                    break;
            }
            
            // Display the result
            resultText.textContent = `${num1} ${operationSymbol} ${num2} = ${result}`;
            resultElement.style.display = 'block';
            
            // Also log to console
            console.log(`Calculation: ${num1} ${operationSymbol} ${num2} = ${result}`);
        }
        
        function clearCalculator() {
            // Clear input fields
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
            
            // Clear selected operation
            selectedOperation = null;
            operationButtons.forEach(btn => btn.classList.remove('active'));
            
            // Hide result and error
            document.getElementById('result').style.display = 'none';
            document.getElementById('error').style.display = 'none';
            
            console.log("Calculator cleared");
        }
        
        function showError(message) {
            const errorElement = document.getElementById('error');
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
        
        // Allow pressing Enter to calculate
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                calculate();
            }
        });