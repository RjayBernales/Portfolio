document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password123') {
        window.location.href = 'Home.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

