function toggleForm() {
    const formSection = document.getElementById("register-form");
    formSection.classList.toggle("hidden");
    formSection.scrollIntoView({ behavior: "smooth" });
}

function handleForm(event) {
    event.preventDefault(); 
    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const org = document.getElementById("organization").value;
    const tickets = document.getElementById("tickets").value;

    const result = `
        Thank you for registering, <strong>${name}</strong>!<br>
        📧 Confirmation sent to: ${email}<br>
        🏢 Organization: ${org || "N/A"}<br>
        🎟️ Tickets reserved: ${tickets}
    `;

    document.getElementById("formResult").innerHTML = result;

    document.getElementById("registrationForm").reset();
}