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
