// Dynamic links
document.addEventListener("DOMContentLoaded", () => {
  // Dynamic links
  const navLinks = [
    { name: "Home", href: "index.html" },
    { name: "Menu", href: "menu.html" },
    { name: "Rooms", href: "rooms.html" },
    { name: "Reservation", href: "reservation.html" },
    { name: "Contact", href: "contact.html" }
  ];

  const navContainer = document.getElementById("nav-links");
  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");

  // Only proceed if the elements exist on this page
  if (navContainer && hamburger && navbar) {
    navContainer.innerHTML = navLinks.map(link => `<a href="${link.href}">${link.name}</a>`).join("");

    // Hamburger toggle
    hamburger.addEventListener("click", () => {
      navContainer.classList.toggle("show");
    });

    // Sticky nav on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }
});