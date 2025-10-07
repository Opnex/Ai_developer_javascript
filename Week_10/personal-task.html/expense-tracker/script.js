// DOM Elements
        const expenseForm = document.getElementById('expense-form');
        const expenseList = document.getElementById('expense-list');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const setBudgetBtn = document.getElementById('set-budget-btn');
        const budgetAlert = document.getElementById('budget-alert');
        
        // Load expenses and budget from localStorage
        let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        let monthlyBudget = parseFloat(localStorage.getItem('monthlyBudget')) || 0;
        let currentFilter = 'all';
        
        // Initialize with today's date
        document.getElementById('expense-date').valueAsDate = new Date();
        document.getElementById('monthly-budget').value = monthlyBudget;
        
        // Save expenses to localStorage
        function saveExpenses() {
            localStorage.setItem('expenses', JSON.stringify(expenses));
        }
        
        // Save budget to localStorage
        function saveBudget() {
            localStorage.setItem('monthlyBudget', monthlyBudget);
        }
        
        // Format currency in Nigerian Naira
        function formatCurrency(amount) {
            return new Intl.NumberFormat('en-NG', {
                style: 'currency',
                currency: 'NGN',
                minimumFractionDigits: 2
            }).format(amount);
        }
        
        // Format date for display
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        }
        
        // Calculate and update summary
        function updateSummary() {
            const totalAmount = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
            const remainingBudget = monthlyBudget - totalAmount;
            
            document.getElementById('total-amount').textContent = formatCurrency(totalAmount);
            document.getElementById('budget-amount').textContent = formatCurrency(monthlyBudget);
            document.getElementById('remaining-amount').textContent = formatCurrency(remainingBudget);
            
            // Show budget alert if spending exceeds 80% of budget
            if (monthlyBudget > 0 && totalAmount >= monthlyBudget * 0.8) {
                budgetAlert.classList.add('show');
            } else {
                budgetAlert.classList.remove('show');
            }
        }
        
        // Render expenses based on current filter
        function renderExpenses() {
            expenseList.innerHTML = '';
            
            let filteredExpenses = expenses;
            
            if (currentFilter !== 'all') {
                filteredExpenses = expenses.filter(expense => expense.category === currentFilter);
            }
            
            if (filteredExpenses.length === 0) {
                const emptyRow = document.createElement('tr');
                emptyRow.innerHTML = `
                    <td colspan="5">
                        <div class="no-data">
                            <i class="fas fa-receipt"></i>
                            <h3>No expenses found</h3>
                            <p>${currentFilter === 'all' ? 'Add your first expense to get started!' : `No ${currentFilter} expenses found`}</p>
                        </div>
                    </td>
                `;
                expenseList.appendChild(emptyRow);
                return;
            }
            
            filteredExpenses.forEach((expense, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${formatDate(expense.date)}</td>
                    <td>${expense.name}</td>
                    <td><span class="category-badge category-${expense.category}">${expense.category.charAt(0).toUpperCase() + expense.category.slice(1)}</span></td>
                    <td>${formatCurrency(parseFloat(expense.amount))}</td>
                    <td><button class="delete-btn" data-id="${expense.id}"><i class="fas fa-trash"></i> Delete</button></td>
                `;
                
                expenseList.appendChild(row);
            });
            
            // Add event listeners to delete buttons
            document.querySelectorAll('.delete-btn').forEach(button => {
                button.addEventListener('click', deleteExpense);
            });
            
            updateSummary();
        }
        
        // Add a new expense
        function addExpense(event) {
            event.preventDefault();
            
            const expenseName = document.getElementById('expense-name').value;
            const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
            const expenseCategory = document.getElementById('expense-category').value;
            const expenseDate = document.getElementById('expense-date').value;
            
            const newExpense = {
                id: Date.now().toString(),
                name: expenseName,
                amount: expenseAmount,
                category: expenseCategory,
                date: expenseDate
            };
            
            expenses.push(newExpense);
            saveExpenses();
            renderExpenses();
            
            // Reset form
            expenseForm.reset();
            document.getElementById('expense-date').valueAsDate = new Date();
        }
        
        // Delete an expense
        function deleteExpense(event) {
            const expenseId = event.currentTarget.getAttribute('data-id');
            
            if (confirm('Are you sure you want to delete this expense?')) {
                expenses = expenses.filter(expense => expense.id !== expenseId);
                saveExpenses();
                renderExpenses();
            }
        }
        
        // Set monthly budget
        function setBudget() {
            const budgetInput = document.getElementById('monthly-budget').value;
            
            if (budgetInput && parseFloat(budgetInput) > 0) {
                monthlyBudget = parseFloat(budgetInput);
                saveBudget();
                updateSummary();
                alert('Monthly budget set successfully!');
            } else {
                alert('Please enter a valid budget amount.');
            }
        }
        
        // Filter expenses
        function setFilter(event) {
            // Update active filter button
            filterBtns.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            // Set current filter and re-render
            currentFilter = event.target.getAttribute('data-filter');
            renderExpenses();
        }
        
        // Event listeners
        expenseForm.addEventListener('submit', addExpense);
        setBudgetBtn.addEventListener('click', setBudget);
        filterBtns.forEach(btn => {
            btn.addEventListener('click', setFilter);
        });
        
        // Initial render
        updateSummary();
        renderExpenses();