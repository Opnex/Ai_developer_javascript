const btn = document.getElementById("click");

btn.onclick = () => {
    alert("Hello world")
    console.log("Welcome to Js")
}

document.getElementById("clickbtn").addEventListener("click",
function  () {

document.getElementById("result").textContent
= "You clicked me"
    });

document.getElementById("nameInput").addEventListener("input", function (e) {
    document.getElementById("nameOutput").textContent = `Hello, ${e.target.value}`;
});


// Object
let user = {
    name: "John",
    age: 25,
    isAdmin: true,
};

// Array
let colors = ["red", "green", "blue"];

// Function
function greet(name) {
    return `Hello, ${name}`;
}

console.log(greet("John"));



let isLoggedIn = true;
let hasPaid = false;

if (isLoggedIn) {
    console.log("Welcome back!");
}   else {
    consosle.log("Please log in.");
}