
    // Function to update the content of the span with the first input value
    function updateFirstName() {
      const firstNameInput = document.getElementById("firstname");
      const displayFirstName = document.getElementById("display-firstname");
      displayFirstName.textContent = firstNameInput.value;
    }
  
    // Function to handle age input and show/hide hard truth accordingly
    function handleAgeInput() {
      const ageInput = document.getElementById("age");
      const hardTruthSection = document.getElementById("a-hard-truth");
  
      if (parseInt(ageInput.value) < 18) {
        hardTruthSection.style.visibility = "hidden";
      } else {
        hardTruthSection.style.visibility = "visible";
      }
    }
  
    // Function to handle password input and validation
    function handlePasswordInput() {
      const passwordInput = document.getElementById("pwd");
      const confirmInput = document.getElementById("pwd-confirm");
  
      // Visual hint for password length validation
      if (passwordInput.value.length < 6 || passwordInput.value !== confirmInput.value) {
        passwordInput.style.border = "1px solid red";
        confirmInput.style.border = "1px solid red";
      } else {
        passwordInput.style.border = "";
        confirmInput.style.border = "";
      }
    }
  
    // Fonction "toogle dark mode" basé sur l'option selectionnée
    function toggleDarkMode() {
      const body = document.body;
      const select = document.getElementById("toggle-darkmode");
  
      if (select.value === "dark") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
      } else {
        body.style.backgroundColor = "";
        body.style.color = "";
      }
    }
  
    // Add keyup listeners
    document.getElementById("firstname").addEventListener("keyup", updateFirstName);
    document.getElementById("age").addEventListener("keyup", handleAgeInput);
    document.getElementById("pwd").addEventListener("keyup", handlePasswordInput);
    document.getElementById("pwd-confirm").addEventListener("keyup", handlePasswordInput);
  
    // Add change listener for dark mode toggle
    document.getElementById("toggle-darkmode").addEventListener("change", toggleDarkMode);

  