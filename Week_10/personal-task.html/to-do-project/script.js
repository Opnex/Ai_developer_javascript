// DOM Elements
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const filterBtns = document.querySelectorAll('.filter-btn');

// Load tasks from localStorage or initialize empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

// Initialize with today's date
document.getElementById('task-date').valueAsDate =  new Date();

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Format date for display
function formatDate(dateString) {
    const options = {year: 'numeric', month: 'short', day: 'numeric'};
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Render tasks based on current filter
function renderTasks() {
    taskList.innerHTML = '';

    let filteredTasks = tasks;


    if (currentFilter === 'pending') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    } else if (currentFilter === 'high') {
        filteredTasks = tasks.filter(task => task.priority === 'high');
    }

    if (filteredTasks.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `
            <i class="fas fa-clipboard-list"></i>
            <h3>No task found in the tasks list</h3>
            <p>${currentFilter === 'all' ? 'Add your first task to get started!' : `No ${currentFilter} tasks found`}</p>
            `;
            taskList.appendChild(emptyState);
            return;
    }

    filteredTasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = `task-item ${task.priority}-priority ${task.completed ? 'completed' : ''}`;

        taskItem.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}">
            <div class="task-content">
                <div class="task-name">${task.name}</div>
                <div class="task-details">
                <span><i class="far fa-calendar"></i> ${formatDate(task.date)}</span>
                <span class="task-priority priority-${task.priority}">
                <i class="fas fa-${task.priority === 'high' ? 'exclamation-circle' : task.priority === 'medium' ? 'minus-circle' : 'info-circle'}"></i>
                ${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                </span>
                </div>
                </div>
                <div class="task-action">
                    <button class="delete-btn" data-id="${task.id}"><i class="fas fa-trash"></i></button>
                </div>
                `;

                taskList.appendChild(taskItem);
    });

    // Add event listeners to checkboxes and delete buttons
    document.querySelectorAll('.task-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', toggleTask);
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', deleteTask);
    });
}

    // Add a new task
    function addTask(event) {
        event.preventDefault();
        
        const taskName = document.getElementById('task-name').value;
        const taskPriority = document.getElementById('task-priority').value;
        const taskDate = document.getElementById('task-date').value;

        const newTask = {
            id: Date.now().toString(),
            name: taskName,
            priority:taskPriority,
            date: taskDate,
            completed: false
        };

        tasks.push(newTask);
        saveTasks();
        renderTasks();

        // Reset form
        taskForm.reset();
        document.getElementById('task-date').valueAsDate = new Date();
    }

    // Toggle task completion status
    function toggleTask(event) {
        const taskId = event.target.getAttribute('data-id');
        const taskIndex = tasks.findIndex(task => task.id === taskId);

        if (taskIndex !== -1) {
            tasks[taskIndex].completed = !tasks[taskIndex].completed;
            saveTasks();
            renderTasks();
        }
    }

     // Delete a task
     function deleteTask(event) {
            const taskId = event.currentTarget.getAttribute('data-id');
            
            if (confirm('Are you sure you want to delete this task?')) {
                tasks = tasks.filter(task => task.id !== taskId);
                saveTasks();
                renderTasks();
            }
        }

    // Filter tasks
        function setFilter(event) {
            // Update active filter button
            filterBtns.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            // Set current filter and re-render
            currentFilter = event.target.getAttribute('data-filter');
            renderTasks();
        }
        
        // Event listeners
        taskForm.addEventListener('submit', addTask);
        filterBtns.forEach(btn => {
            btn.addEventListener('click', setFilter);
        });
        
        // Initial render
        renderTasks();