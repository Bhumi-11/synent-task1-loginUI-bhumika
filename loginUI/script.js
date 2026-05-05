document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation log
    if (email && password) {
        console.log("Login Attempted with:", email);
        alert("Login successful! (Check the console)");
    } else {
        alert("Please fill in all fields.");
    }
});