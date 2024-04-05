document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get username and password input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Your authentication logic here
    // For demonstration, let's assume correct credentials are 'admin' and 'password'
    if (username === 'admin' && password === 'password') {
        // If credentials are correct, redirect to home page or do something else
        window.location.href = 'home.html';
    } else {
        // If credentials are incorrect, show error message
        document.getElementById('error-msg').textContent = 'Invalid username or password';
    }
});
