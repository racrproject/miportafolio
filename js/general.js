document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".hamburguesa");
  const navLinks = document.querySelector(".nav-links");
  const closeMenu = document.querySelector(".close-menu"); // Solo este botón de cierre

  menuToggle.addEventListener("click", () => {
    navLinks.classList.add("active");
    menuToggle.classList.add("active");
  });

  closeMenu.addEventListener("click", () => {
    console.log("Botón de cierre clicado");

    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});
