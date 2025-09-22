function showExample() {
            const firstName = "Alex";
            const lastName = "Johnson";
            const age = 22;
            const isStudent = true;
            const favoriteColor = "blue";
            
            // Calculate future age
            const futureAge = age + 5;
            
            // Create the profile card
            const profileCard = document.getElementById('profile-card');
            profileCard.innerHTML = `
                <div class="profile-header">
                    <div>
                        <h3>${firstName} ${lastName}</h3>
                        <p>Personal Information Profile</p>
                    </div>
                </div>
                
                <div class="profile-info">
                    <div class="info-item">
                        <span class="label">First Name:</span>
                        <span class="value">${firstName}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Last Name:</span>
                        <span class="value">${lastName}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Age:</span>
                        <span class="value">${age} years old</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Student Status:</span>
                        <span class="value">${isStudent ? 'Currently a student' : 'Not currently a student'}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Favorite Color:</span>
                        <span class="value">${favoriteColor}</span>
                    </div>
                    <div class="future-age">
                        In 5 years, ${firstName} will be ${futureAge} years old
                    </div>
                </div>
            `;
            
            // Update output message and show the card
            document.getElementById('output-message').textContent = "Here's an example personal information profile:";
            profileCard.style.display = 'block';
        }
        
        function createCustomProfile() {
            // Get user input
            const firstName = prompt("Enter your first name:") || "Student";
            const lastName = prompt("Enter your last name:") || "Learner";
            const age = parseInt(prompt("Enter your age:")) || 20;
            const isStudent = confirm("Are you currently a student? (OK for Yes, Cancel for No)");
            const favoriteColor = prompt("Enter your favorite color:") || "blue";
            
            // Calculate future age
            const futureAge = age + 5;
            
            // Create the profile card
            const profileCard = document.getElementById('profile-card');
            profileCard.innerHTML = `
                <div class="profile-header">
                    <div>
                        <h3>${firstName} ${lastName}</h3>
                        <p>Your Personal Information Profile</p>
                    </div>
                </div>
                
                <div class="profile-info">
                    <div class="info-item">
                        <span class="label">First Name:</span>
                        <span class="value">${firstName}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Last Name:</span>
                        <span class="value">${lastName}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Age:</span>
                        <span class="value">${age} years old</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Student Status:</span>
                        <span class="value">${isStudent ? 'Currently a student' : 'Not currently a student'}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Favorite Color:</span>
                        <span class="value">${favoriteColor}</span>
                    </div>
                    <div class="future-age">
                        In 5 years, you will be ${futureAge} years old
                    </div>
                </div>
            `;
            
            // Update output message and show the card
            document.getElementById('output-message').textContent = "Here's your personal information profile:";
            profileCard.style.display = 'block';
            
            // Log to console for debuging sake
            console.log("=== Personal Information ===");
            console.log(`First Name: ${firstName}`);
            console.log(`Last Name: ${lastName}`);
            console.log(`Age: ${age}`);
            console.log(`Student Status: ${isStudent}`);
            console.log(`Favorite Color: ${favoriteColor}`);
            console.log(`Age in 5 Years: ${futureAge}`);
        }