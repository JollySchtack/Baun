document.getElementById("verifyForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const otp = document.getElementById("otp").value.trim();

    const userId = localStorage.getItem("pendingUserId");
    const name = localStorage.getItem("pendingName");

    if (!otp || !userId) {
        alert("Verification data missing. Please register again.");
        return;
    }

    try {
        // Verify OTP and create session
        await account.createSession({
            userId: userId,
            secret: otp
        });

        // Optional: set the user's name
        if (name) {
            try {
                await account.updateName(name);
            } catch (_) {}
        }

        // Cleanup
        localStorage.removeItem("pendingName");
        localStorage.removeItem("pendingEmail");
        localStorage.removeItem("pendingUserId");

        // Go to dashboard
        window.location.href = "dashboard.html";

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
});
