document.getElementById("auth-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;
    let language = document.getElementById("language").value;

    if (!email || !password) {
        alert("Email and Password are required.");
        return;
    }

    let userData = { name, username, email, password, phone, language };

    if (isLoginMode) {
        alert("Logging in...");
    } else {
        localStorage.setItem("user", JSON.stringify(userData));
        alert("Sign Up Successful!");
    }

    document.getElementById("auth-form").reset();
});

let isLoginMode = false;
function toggleForm() {
    isLoginMode = !isLoginMode;
    document.getElementById("form-title").textContent = isLoginMode ? "Login" : "Sign up";
    document.getElementById("name").style.display = isLoginMode ? "none" : "block";
    document.getElementById("username").style.display = isLoginMode ? "none" : "block";
    document.getElementById("phone").style.display = isLoginMode ? "none" : "block";
    document.getElementById("language").style.display = isLoginMode ? "none" : "block";
    document.getElementById("switch-form" ).innerHTML = isLoginMode 
        ? "Don't have an account? <span onclick='toggleForm()'>Sign Up</span>"
        : "Already have an account? <span onclick='toggleForm()'>Login</span>";
}

function googleLogin() {
    alert("Google Login triggered.");
}

function facebookLogin() {
    alert("Facebook Login triggered.");
}

function resetPassword() {
    let email = prompt("Enter your email for password recovery:");
    if (email) {
        alert("Password reset link sent to " + email);
    }
}
