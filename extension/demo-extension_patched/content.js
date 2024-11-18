//////////// Patched version of extension

// Store the original getElementById method
const originalGetElementById = document.getElementById;

// Override getElementById to create elements dynamically
document.getElementById = function(id) {
    console.warn("document.getElementById intercepted")
    // Intercept and create elements dynamically if they don't exist
    if (id === "loginForm") {
        // Check if the element already exists
        let loginForm = originalGetElementById.call(document, id);
        if (!loginForm) {
            // Create the login form dynamically if it doesn't exist
            loginForm = document.createElement('form');
            loginForm.id = "loginForm";
            document.body.appendChild(loginForm);
            console.warn("loginForm created dynamically.", loginForm);
        }
        return loginForm;
    }

    if (id === "submitButton") {
        // Check if the submit button exists
        let submitButton = originalGetElementById.call(document, id);
        if (!submitButton) {
            // Create the submit button dynamically
            submitButton = document.createElement('button');
            submitButton.id = "submitButton";
            submitButton.textContent = "Submit";
            document.body.appendChild(submitButton);
            console.warn("submitButton created dynamically.", submitButton);
        }
        return submitButton;
    }

    // For any other id, fall back to the original method
    return originalGetElementById.call(document, id);
};

// Log that the content script is active
console.log("Content script injected: Overriding getElementById to create elements dynamically.");

//////////// Original extension
window.onload = () => {
    console.log("EXTENSION: Searching for login Form");
    const loginForm = document.getElementById("loginForm");
    console.log("EXTENSION: Searching for Submit Button");
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
