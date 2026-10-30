
(function () {
    "use strict";

    var form = document.getElementById("loginForm");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
    var loginMessage = document.getElementById("loginMessage");
    var toggleBtn = document.getElementById("togglePassword");
    var submitBtn = document.getElementById("submitBtn");


    if (toggleBtn && passwordInput) {
        toggleBtn.addEventListener("click", function () {
            var isPassword = passwordInput.type === "password";
            passwordInput.type = isPassword ? "text" : "password";
            toggleBtn.textContent = isPassword ? "Hide" : "Show";
        });
    }

    if (usernameInput) {
        usernameInput.addEventListener("input", function () {
            usernameError.textContent = "";
        });
    }
    if (passwordInput) {
        passwordInput.addEventListener("input", function () {
            passwordError.textContent = "";
        });
    }


    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            var isValid = true;

            var usernameVal = usernameInput ? usernameInput.value.trim() : "";
            if (!usernameVal) {
                if (usernameError) usernameError.textContent = "Please enter your email or username.";
                isValid = false;
            }

            var passwordVal = passwordInput ? passwordInput.value : "";
            if (!passwordVal) {
                if (passwordError) passwordError.textContent = "Please enter your password.";
                isValid = false;
            } else if (passwordVal.length < 6) {
                if (passwordError) passwordError.textContent = "Password must be at least 6 characters.";
                isValid = false;
            }

            if (!isValid) return;

            if (submitBtn) {
                submitBtn.textContent = "Signing in\u2026";
                submitBtn.disabled = true;
            }

            setTimeout(function () {
                if (loginMessage) {
                    loginMessage.style.color = "#c2410c";
                    loginMessage.textContent = "Welcome back! Redirecting\u2026";
                }
                setTimeout(function () {
                    window.location.href = "webtask1.html";
                }, 1200);
            }, 1000);
        });
    }
})();
