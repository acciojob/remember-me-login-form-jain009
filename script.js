document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingUserButton = document.getElementById("existing");
    let isLogin = false;

    // Retrieve stored credentials
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingUserButton.style.display = "block";
    }

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username && password) {
            isLogin = true;
            console.log('Welcome, you are logged in');

            alert(`Logged in as ${username}`);

            if (rememberMeCheckbox.checked) {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
            } else {
                localStorage.removeItem("username");
                localStorage.removeItem("password");
            }
        }
    });

    existingUserButton.addEventListener("click", function () {
        if (savedUsername) {
            alert(`Logged in as ${savedUsername}`);
        } else {
            alert("No saved user found.");
        }
    });
});
