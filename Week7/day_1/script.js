// const btn = document.getElementById("button");
// const btns = document.getElementById("buttons");
// const btnss = document.getElementById("buttonss");


// const about = document.getElementById("about");
// const contact = document.getElementById("contact");
// const skills = document.getElementById("skills");


// // show about as the default
// about.style.display = "block"
// btn.classList.add("active");

// btn.onclick = () => {
//     contact.style.display = "none";
//     skills.style.display = "none";
//     about.style.display = "block";
// };


// btn.classList.add("active");
// btns.classList.remove("active");
// btnss.classList.remove("active");



// btns.onclick = () => {
//     about.style.display = "none";
//     skills.style.display = "none";
//     contact.style.display = "block";
// };

// btns.classList.add("active");
// btn.classList.remove("active");
// btnss.classList.remove("active");




// btnss.onclick = () => {
//     about.style.display = "none";
//     contact.style.display = "none";
//     skills.style.display = "block";
// };

// btnss.classList.add("active");
// btn.classList.remove("active");
// btns.classList.remove("active");


        const btn = document.getElementById("button");
        const btns = document.getElementById("buttons");
        const btnss = document.getElementById("buttonss");

        const about = document.getElementById("about");
        const contact = document.getElementById("contact");
        const skills = document.getElementById("skills");

        // Show about as the default
        about.style.display = "block";
        contact.style.display = "none";
        skills.style.display = "none";
        btn.classList.add("active");
        
        // Remove active class from all buttons
        function removeActive() {
            btn.classList.remove("active");
            btns.classList.remove("active");
            btnss.classList.remove("active");
        }

        btn.onclick = () => {
            contact.style.display = "none";
            skills.style.display = "none";
            about.style.display = "block";
            
            removeActive();
            btn.classList.add("active");
        };

        btns.onclick = () => {
            about.style.display = "none";
            skills.style.display = "none";
            contact.style.display = "block";
            
            removeActive();
            btns.classList.add("active");
        };

        btnss.onclick = () => {
            about.style.display = "none";
            contact.style.display = "none";
            skills.style.display = "block";
            
            removeActive();
            btnss.classList.add("active");
        };
