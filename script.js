async function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const messageDiv = document.getElementById("message");
    const submitButton = document.querySelector("button[type='submit']");

    // Clear previous messages
    messageDiv.textContent = "";
    messageDiv.className = "";

    // Basic validation
    if (name === "" || email === "" || password === "") {
        showMessage("Please fill all fields", "error");
        return false;
    }

    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.classList.add("loading");
    submitButton.textContent = "Submitting...";


    try {
        const response = await fetch("http://localhost:3000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        if (response.ok && data.success) {
            showMessage("Registration successful! ✓", "success");
            // Clear form
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        } else {
            showMessage(data.message || "Registration failed", "error");
        }
    } catch (error) {
        console.error("Error:", error);
        showMessage("Unable to connect to server. Please make sure the server is running.", "error");
    } finally {
        // Re-enable button
        submitButton.disabled = false;
        submitButton.classList.remove("loading");
        submitButton.textContent = "Login";
    }

    return false;
}

function showMessage(text, type) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = text;
    messageDiv.className = type;
}

