document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const projectsGrid = document.getElementById('projectsGrid');
  
    async function fetchProjects() {
      try {
        const response = await fetch('/json/projects.json');
        const projects = await response.json();
        
        // Muestra todos los proyectos inicialmente
        displayProjects(projects);
        
        // Agrega el evento de búsqueda (usa el array de projects obtenido)
        searchInput.addEventListener('input', (event) => {
          const searchTerm = event.target.value.toLowerCase();
          const filteredProjects = projects.filter(project =>
            project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            (project.tags && project.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
          );
          displayProjects(filteredProjects);
        });
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }
  
    function displayProjects(filteredProjects) {
      projectsGrid.innerHTML = '';
      filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tags">
            ${project.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
          </div>
          <a href="${project.link}" target="_blank">Información →</a>
        `;
        projectsGrid.appendChild(projectCard);
      });
    }
  
    // Llama a la función para obtener y desplegar los proyectos
    fetchProjects();
  });



// Selecciona todos los botones de copiar
const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Selecciona el bloque de código asociado (anterior a este botón)
        const codeBlock = button.previousElementSibling;

        // Copiando el contenido al portapapeles
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = codeBlock.textContent.trim(); // Obtenemos el texto del código
        document.body.appendChild(tempTextArea);
        tempTextArea.select();

        document.execCommand('copy');
        document.body.removeChild(tempTextArea);

        // Feedback visual (opcional)
        button.innerHTML = '¡Copiado!';
        setTimeout(() => {
            button.innerHTML = '<img src="/images/icons/copy.svg" alt="Copiar" class="copy-icon">';
        }, 2000);
    });
});


//Zoom de la imagen
const imagenes = document.querySelectorAll('.imagen');
const overlays = document.querySelectorAll('.overlay');

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', () => {
        const overlay = imagen.nextElementSibling; // Obtiene el overlay correspondiente
        overlay.style.display = 'flex';
    });
});

overlays.forEach((overlay) => {
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
});

