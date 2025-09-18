const btn = document.getElementById("button");
const one = document.getElementById("one");
btn.onclick = () => {
    three.style.display = "none";
    one.style.display = "block";
};


const btns = document.getElementById("buttons");
const two = document.getElementById("two");
btns.onclick = () => {
    one.style.display = "none";
    two.style.display = "block";
};



const btnss = document.getElementById("buttonss");
const three = document.getElementById("three");
btnss.onclick = () => {
    two.style.display = "none";
    three.style.display = "block";
};