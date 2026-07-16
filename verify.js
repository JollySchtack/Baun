document.getElementById("verifyForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const otp = document.getElementById("otp").value.trim();

    const email = localStorage.getItem("pendingEmail");
    const name = localStorage.getItem("pendingName");
    const userId = localStorage.getItem("userId"); // We'll save this when sending the OTP

    if (!otp) {
        alert("Enter the verification code.");
        return;
    }

    try {
        // Verify the OTP and create a session
        await account.createSession(userId, otp);

        // Save the user's name (optional)
        try {
            await account.updateName(name);
        } catch (e) {
            console.log("Couldn't update name:", e);
        }

        localStorage.removeItem("pendingEmail");
        localStorage.removeItem("pendingName");
        localStorage.removeItem("userId");

        window.location.href = "dashboard.html";

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
});
