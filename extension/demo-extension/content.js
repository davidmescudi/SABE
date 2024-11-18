window.onload = () => {
    console.log("Searching for login Form");
    const loginForm = document.getElementById("loginForm");
    console.log("Searching for Submit Button");
    const formSubmitButton = document.getElementById("submitButton");

    if (formSubmitButton) formSubmitButton.remove();

    if (loginForm) {
        // Create a new red button
        const redButton = document.createElement("button");
        redButton.textContent = "Click Me";
        redButton.style.backgroundColor = "red";

        // Append the button to the login form
        loginForm.appendChild(redButton);
    }
};
