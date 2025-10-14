
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

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  const icon = toggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});


window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10, 77, 140, 0.95)";
    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
  } else {
    navbar.style.background = "rgba(10, 77, 140, 0.8)";
    navbar.style.boxShadow = "none";
  }
});
