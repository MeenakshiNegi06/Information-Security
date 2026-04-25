function checkPassword() {
    // 1. Pehle se set kiya gaya password
    const correctPassword = "MySecretPassword123";

    // 2. User ne jo password dala wo uthao
    const enteredPassword = document.getElementById("userPass").value;
    const messageDisplay = document.getElementById("message");

    // 3. Logic check
    if (enteredPassword === correctPassword) {
        // Agar password sahi hai
        alert("Success! Opening website...");
        window.location.href = "index.html"; // Yaha apni website ka link dalein
    } else {
        // Agar password galat hai
        messageDisplay.innerText = "Incorrect password! Please try again.";
        document.getElementById("userPass").value = ""; // Field clear karne k liye
    }
}