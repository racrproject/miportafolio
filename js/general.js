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

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("pdf-modal");
  const modalContent = document.querySelector(".modal-content");
  const previewBtn = document.getElementById("preview-btn");
  const closeBtn = document.querySelector(".close-btn");

  // Abrir el modal
  previewBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Cerrar el modal al hacer clic en la "X"
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar el modal al hacer clic fuera del contenido
  modal.addEventListener("click", (e) => {
    if (!modalContent.contains(e.target)) {
      modal.style.display = "none";
    }
  });
});