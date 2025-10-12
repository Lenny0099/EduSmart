document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Gracias por contactarte. Te responderé pronto 💬");
    this.reset();
});

const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    if (navLinks.style.right === "0px") {
        navLinks.style.right = "-100%";
    } else {
        navLinks.style.right = "0px";
    }
});


ScrollReveal().reveal('.section', {
  duration: 1200,
  distance: '60px',
  origin: 'bottom',
  easing: 'ease-in-out',
  reset: true // Si quieres que se repita la animación al hacer scroll
});


AOS.init({
  duration: 1200,
  once: true
});
