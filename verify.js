document.getElementById("verifyForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const otp = document.getElementById("otp").value.trim();

    const userId = localStorage.getItem("pendingUserId");
    const name = localStorage.getItem("pendingName");

    try {

        await account.createSession(
            userId,
            otp
        );

        // Update user's display name
        if (name) {
            try {
                await account.updateName(name);
            } catch (err) {
                console.log(err);
            }
        }

        localStorage.removeItem("pendingUserId");
        localStorage.removeItem("pendingEmail");
        localStorage.removeItem("pendingName");

        window.location.href = "dashboard.html";

    } catch (err) {

        console.error(err);
        alert(err.message);

    }

});
