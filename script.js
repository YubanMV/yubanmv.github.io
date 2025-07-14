// Cambiar texto del header a español
document.getElementById('btn-es').addEventListener('click', function () {
    document.getElementById('es').style.display = 'block';
    document.getElementById('en').style.display = 'none';
    document.getElementById('es-proyectos').style.display = 'block';
    document.getElementById('en-proyectos').style.display = 'none';

    document.getElementById('nav-perfil').textContent = "Perfil";
    document.getElementById('nav-proyectos').textContent = "Proyectos";
    document.getElementById('nav-contacto').textContent = "Contacto";
});



// Cambiar texto del header a inglés
document.getElementById('btn-en').addEventListener('click', function () {
    document.getElementById('es').style.display = 'none';
    document.getElementById('en').style.display = 'block';
    document.getElementById('es-proyectos').style.display = 'none';
    document.getElementById('en-proyectos').style.display = 'block';

    document.getElementById('nav-perfil').textContent = "Profile";
    document.getElementById('nav-proyectos').textContent = "Projects";
    document.getElementById('nav-contacto').textContent = "Contact";
});

const themeToggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// Si hay un tema guardado, se aplica al cargar la página
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
}

themeToggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        localStorage.setItem("theme", "dark");
    } else {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        localStorage.setItem("theme", "light");
    }
});



document.querySelectorAll('.proyecto-tarjeta').forEach(proyecto => {
    let imagenes = proyecto.getAttribute('data-images').split(',').map(img => img.trim());
    console.log("Empieza")
    console.log(imagenes); // Verifica las rutas
    console.log("Termina")
    let imagenDiv = proyecto.querySelector('.proyecto-imagen');
    let imgElement = imagenDiv.querySelector('img');
    let index = 0;
    let intervalo;

    proyecto.addEventListener('mouseenter', () => {
        // Cambia la imagen inmediatamente
        index = (index + 1) % imagenes.length;
        imgElement.style.opacity = 0;

        setTimeout(() => {
            imgElement.src = imagenes[index];
            imgElement.style.opacity = 1;
        }, 200); // Rápido desvanecimiento inicial

        // Luego sigue con el intervalo regular
        intervalo = setInterval(() => {
            imgElement.style.opacity = 0;

            setTimeout(() => {
                index = (index + 1) % imagenes.length;
                imgElement.src = imagenes[index];
                imgElement.style.opacity = 1;
            }, 500);
        }, 2000);
    });

    proyecto.addEventListener('mouseleave', () => {
        clearInterval(intervalo);
        imgElement.style.opacity = 0;

        setTimeout(() => {
            imgElement.src = imagenes[0]; // Vuelve a la imagen principal
            imgElement.style.opacity = 1;
        }, 500);
    });
});
