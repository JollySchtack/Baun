document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
        alert("Please complete the form.");
        return;
    }

    try {
        // Save data for verify page
        localStorage.setItem("pendingName", name);
        localStorage.setItem("pendingEmail", email);

        // Send OTP
        const token = await account.createEmailToken({
            userId: Appwrite.ID.unique(),
            email: email
        });

        // Save the userId returned by Appwrite
        localStorage.setItem("pendingUserId", token.userId);

        // Go to verify page
        window.location.href = "verify.html";

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
});
