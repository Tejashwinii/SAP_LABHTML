const form = document.getElementById("contactForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        errorMsg.textContent = "All fields are required!";
        return;
    }

    if (!email.includes("@")) {
        errorMsg.textContent = "Please enter a valid email address!";
        return;
    }

    errorMsg.style.color = "green";
    errorMsg.textContent = "Message sent successfully!";
    form.reset();
});
