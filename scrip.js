document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = form.username.value;
        const password = form.password.value;

        
        if (username === 'user' && password === 'password') {
            message.textContent = 'Login successful!';
            message.style.color = 'green';
        } else {
            message.textContent = 'Invalid username or password';
            message.style.color = 'red';
        }
    });
});
