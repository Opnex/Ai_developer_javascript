// Get DOM elements
        const studentForm = document.getElementById('student-form');
        const studentList = document.getElementById('student-list');
        const searchInput = document.getElementById('search');
        
        // Load students from localStorage or initialize empty array
        let students = JSON.parse(localStorage.getItem('students')) || [];
        
        // Function to save students to localStorage
        function saveStudents() {
            localStorage.setItem('students', JSON.stringify(students));
        }
        
        // Function to calculate average score
        function calculateAverage(math, science, english) {
            return Math.round((math + science + english) / 3);
        }
        
        // Function to determine performance category
        function getPerformance(average) {
            if (average >= 75) return { text: 'Excellent', class: 'excellent' };
            if (average >= 50) return { text: 'Good', class: 'good' };
            return { text: 'Needs Help', class: 'needs-help' };
        }
        
        // Function to render student list
        function renderStudents(studentArray = students) {
            studentList.innerHTML = '';
            
            if (studentArray.length === 0) {
                studentList.innerHTML = '<tr><td colspan="7" class="no-data">No student records found</td></tr>';
                return;
            }
            
            studentArray.forEach((student, index) => {
                const average = calculateAverage(student.math, student.science, student.english);
                const performance = getPerformance(average);
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><img src="${student.image}" alt="${student.name}" class="student-img" onerror="this.src='https://via.placeholder.com/50'"></td>
                    <td>${student.name}</td>
                    <td>${student.age}</td>
                    <td>${student.class}</td>
                    <td>${average}%</td>
                    <td class="${performance.class}">${performance.text}</td>
                    <td><button class="delete-btn" data-index="${index}">Delete</button></td>
                `;
                
                studentList.appendChild(row);
            });
            
            // Add event listeners to delete buttons
            document.querySelectorAll('.delete-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    deleteStudent(index);
                });
            });
        }
        
        // Function to add a new student
        function addStudent(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const age = parseInt(document.getElementById('age').value);
            const studentClass = document.getElementById('class').value;
            const image = document.getElementById('image').value;
            const math = parseInt(document.getElementById('math').value);
            const science = parseInt(document.getElementById('science').value);
            const english = parseInt(document.getElementById('english').value);
            
            const newStudent = {
                name,
                age,
                class: studentClass,
                image,
                math,
                science,
                english
            };
            
            students.push(newStudent);
            saveStudents();
            renderStudents();
            
            // Reset form
            studentForm.reset();
        }
        
        // Function to delete a student
        function deleteStudent(index) {
            if (confirm('Are you sure you want to delete this student?')) {
                students.splice(index, 1);
                saveStudents();
                renderStudents();
            }
        }
        
        // Function to filter students by name
        function filterStudents() {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredStudents = students.filter(student => 
                student.name.toLowerCase().includes(searchTerm)
            );
            renderStudents(filteredStudents);
        }
        
        // Event listeners
        studentForm.addEventListener('submit', addStudent);
        searchInput.addEventListener('input', filterStudents);
        
        // Initial render
        renderStudents();