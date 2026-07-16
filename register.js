document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
        alert("Please complete the form.");
        return;
    }

    try {
        // Save for the verification page
        localStorage.setItem("pendingName", name);
        localStorage.setItem("pendingEmail", email);

        // Send OTP
     const token = await account.createEmailToken(
    Appwrite.ID.unique(),
    email
);

console.log(JSON.stringify(token, null, 2));
        
 // Go to OTP page
window.location.href = "verify.html";

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
});
