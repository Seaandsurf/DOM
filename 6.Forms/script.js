// Function to update the content of the span with the first input value
function updateFirstName() {
    const firstNameInput = document.getElementById("first-name");
    const displayFirstName = document.getElementById("display-firstname");
    displayFirstName.textContent = firstNameInput.value;
}

// Function to handle age input and show/hide hard truth accordingly
function handleAgeInput() {
    const ageInput = document.getElementById("age");
    const hardTruthSection = document.getElementById("a-hard-truth");

    if (parseInt(ageInput.value) < 18) {
        hardTruthSection.style.display = "none";
    } else {
        hardTruthSection.style.display = "block";
    }
}

// Function to handle password input and validation
function handlePasswordInput() {
    const passwordInput = document.getElementById("password");
    const confirmInput = document.getElementById("confirm-password");

    // Visual hint for password length validation
    if (passwordInput.value.length < 6 || passwordInput.value !== confirmInput.value) {
        passwordInput.style.border = "1px solid red";
        confirmInput.style.border = "1px solid red";
    } else {
        passwordInput.style.border = "";
        confirmInput.style.border = "";
    }
}

// Function to toggle dark mode based on the selected option
function toggleDarkMode() {
    const body = document.body;
    const select = document.getElementById("dark-mode-toggle");

    if (select.value === "dark") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "";
        body.style.color = "";
    }
}

// Add keyup listeners
document.getElementById("first-name").addEventListener("keyup", updateFirstName);
document.getElementById("age").addEventListener("keyup", handleAgeInput);
document.getElementById("password").addEventListener("keyup", handlePasswordInput);
document.getElementById("confirm-password").addEventListener("keyup", handlePasswordInput);

// Add change listener for dark mode toggle
document.getElementById("dark-mode-toggle").addEventListener("change", toggleDarkMode);

