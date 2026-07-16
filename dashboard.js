(async () => {

    try {

        const user = await account.get();

        console.log("Logged in:", user);

    } catch (err) {

        window.location.href = "login.html";

    }

})();

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", async (e) => {

        e.preventDefault();

        try {

            await account.deleteSession("current");

            window.location.href = "login.html";

        } catch (err) {

            console.error(err);

        }

    });

}
