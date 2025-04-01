document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const subject = `Nuevo mensaje de contacto de ${name}`;
        const body = `Nombre: ${name}\n\n Email: ${email}\n\n Mensaje:${message}`;
        const mailtoLink = `mailto:rominaarlleycastro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    });
});

