document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  // For demo, just show alert. Later you can integrate email or backend.
  alert(`Thank you, ${name}! Your message has been received. We will contact you shortly or chat directly via whatsapp.`);

  document.getElementById("contactForm").reset();
});
