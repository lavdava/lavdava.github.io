const loginForm = document.getElementById("loginForm");
const user = document.getElementById("username");
const pass = document.getElementById("password");

loginForm.addEventListener("submit", function(event) {
    if (user.value === "user123" && pass.value === "cheesecake") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
        event.preventDefault();
    }
});