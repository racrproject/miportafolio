document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const blogsGrid = document.getElementById('blogsGrid');

    async function fetchBlogs() {
        try {
            const response = await fetch('/miportafolio/json/blogs.json');
            const blogs = await response.json();
            displayBlogs(blogs);

            // Agregar el evento de búsqueda después de cargar los blogs
            searchInput.addEventListener('input', (event) => {
                const searchTerm = event.target.value.toLowerCase();
                const filteredBlogs = blogs.filter(blog =>
                    blog.title.toLowerCase().includes(searchTerm) ||
                    blog.description.toLowerCase().includes(searchTerm) ||
                    blog.tags.some(tag => tag.toLowerCase().includes(searchTerm))
                );
                displayBlogs(filteredBlogs);
            });
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    }

    function displayBlogs(filteredBlogs) {
        blogsGrid.innerHTML = '';
        filteredBlogs.forEach(blog => {
            const blogCard = document.createElement('div');
            blogCard.classList.add('blog-card');
            blogCard.innerHTML = `
                <div class="blogs-text">
                    <div class="blog-date">${blog.date}</div>
                    <h3>${blog.title}</h3>
                    <p>${blog.description}</p>
                    <div class="tags">
                        ${blog.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                    </div>
                    <a href="${blog.link}" >Leer más →</a>
                </div>
                <div class="img-blog">
                    <img src="${blog.image}" alt="Blog image">
                </div>
            `;
            blogsGrid.appendChild(blogCard);
        });
    }

    fetchBlogs();
});
