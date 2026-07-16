(async () => {
    try {
        const user = await account.get();

        console.log("Logged in as:", user.email);

        // Optional: display email
        const emailEl = document.getElementById("userEmail");
        if (emailEl) emailEl.textContent = user.email;

    } catch (err) {
        // Not logged in
        window.location.href = "login.html";
    }
})();
