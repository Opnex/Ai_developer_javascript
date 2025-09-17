// const btn = document.getElementById("one");
// btn.onclick = () => {
//     alert("Welcome to javascript")
//     // console.log("Welcome once again")
//     // let name = prompt("What is your nmae?")
//     // console.log("Name: " + " " + name)
//     // console.log(`Name: ${name}`)

//     btn.style.backgroundColor = "green"
// }

// btn.onclick = () => {
//     btn.style.display = "block"
// }



const btn = document.getElementById("button");
const btns = document.getElementById("buttons");
const btnss = document.getElementById("buttonss");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

btn.onclick = () => {
    three.style.display = "none";
    one.style.display = "block";

};


btns.onclick = () => {
    one.style.display = "none";
    two.style.display = "block";

};

btnss.onclick = () => {
    two.style.display = "none";
    three.style.display = "block";

};
