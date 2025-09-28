                                                                // TASK1

document.getElementById('btn').addEventListener('click', function(){
    document.getElementById('text').style.color = 'blue';
    document.getElementById('text').style.backgroundColor = 'black';
})

document.getElementById('btn2').addEventListener('click', function () {
    document.getElementById('text').textContent = 'My page Task';
    document.getElementById('text').style.color = ''
    document.getElementById('text').style.backgroundColor = '';
})

                                                                // TASK2

function showText() {
    let textinput = document.getElementById('textInput').value; 
    let outputDiv = document.getElementById('keyOutput');
    let countDiv = document.getElementById('characterCount');

    if ( textinput.length > 200) {
        outputDiv.style.color = 'red';
    } else {
        outputDiv.style.color = 'black';
    }
            
outputDiv.innerText = textinput;
countDiv.innerText = "Character count: " + textinput.length;
}
showText();


                                                                // TASK3

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let usernameInput = document.getElementById('username');
    let passwordInput = document.getElementById('password');
    
    let username = usernameInput.value.trim();
    let password = passwordInput.value;

    if (username === '' || password === '') {
        alert('Please fill in all fields');
    } else {

        if (username === 'admin' && password === '1234') {
            alert('Admin login successful');
        } else {
            alert(`Welcome, ${username}!`);
        }
        
        usernameInput.value = '';
        passwordInput.value = '';
    }
});