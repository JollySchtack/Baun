document.getElementById("loginForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    if (!email) {

        alert("Enter your email.");

        return;

    }

    try {

        const token = await account.createEmailToken(
            Appwrite.ID.unique(),
            email
        );

        localStorage.setItem("pendingUserId", token.userId);
        localStorage.setItem("pendingEmail", email);

        window.location.href = "verify.html";

    } catch (err) {

        console.error(err);
        alert(err.message);

    }

});
