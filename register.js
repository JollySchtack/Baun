console.log("REGISTER.JS LOADED");

document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const name = document.getElementById("fullName").value.trim();

    console.log("Email:", email);
    console.log("Name:", name);

    const data = {
        userId: Appwrite.ID.unique(),
        email: email
    };

    console.log("Sending:", data);

    try {
        const result = await account.createEmailToken(data);

        console.log("SUCCESS", result);

    } catch (err) {
        console.error("ERROR", err);
    }
});
