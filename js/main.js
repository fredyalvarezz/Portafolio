// año automático en footer
document.getElementById("year").textContent = new Date().getFullYear();

// Cerrar modal con esc y click fuera del modal
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});

document.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
})

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modal-title");
const modalImages = document.getElementById("modal-images");
const modalDescription = document.getElementById("modal-description");
const modalTech = document.getElementById("modal-tech");
const modalLinks = document.getElementById("modal-links");

const closeModal = document.querySelector(".modal-close");

const projectsData = {
    streamwhere: {
        title: "StreamWhere",
        description:
            "Aplicación web que permite buscar películas y series y conocer en qué plataforma de streaming están disponibles. Proyecto final del Bootcamp de TripleTen. Desarrollada con React + Vite, la aplicación gestiona usuarios autenticados y permite guardar películas y series en una lista personal con distintos estados (por ver, viendo y vistas). Integra APIs externas como TMDb y WatchMode para obtener información detallada de películas y series, además de un backend propio para el almacenamiento seguro de datos del usuario.",
        tech: "React · JavaScript · Node.js · APIs REST",
        images: [
            "assets/img/streamwhere.png",
            "assets/img/streamwheremovieadd.png",
            "assets/img/streamwhereMyWatchList.png"
        ],
        live: "https://fredyalvarezz.github.io/Streamwhere",
        github: "https://github.com/fredyalvarezz/tripleten_final_project_Movies_wheretowatch.git"
    },

    aroundusa: {
        title: "Around USA",
        description:
            "Aplicación web full-stack tipo red social para compartir fotografías, editar el perfil y gestionar tarjetas de usuario. Frontend desarrollado en React y backend en Express.js con MongoDB, implementando autenticación con tokens y una API REST para la gestión de usuarios y contenido. Al ser uno de los primeros proyectos completos del bootcamp, el mayor reto fue manejar estados globales en React y proteger rutas privadas que solo aparecieran cuando el usuario tuviera la sesión iniciada o que no se pudieran acceder directamente sin haber iniciado sesión.",
        tech: "React · JavaScript · APIs REST",
        images: [
            "assets/img/aroundusa.png",
            "assets/img/aroundusaadd.png",
            "assets/img/aroundusaimg.png"
        ],
        live: "https://fredyalvarezz.github.io/web_project_aroundusa_frontend_demo/",
        github: "https://github.com/fredyalvarezz/web_project_api_full"
    },

    coffeeshop: {
        title: "Coffee Shop",
        description:
        "Landing page responsiva para un café, enfocada en estructura, estilos modernos y buenas prácticas de HTML y CSS, siguiendo una estructura estricta de diseño y la metodología BEM para un código estructurado. Se utilizó la integración de contenido desde YouTube para agregar videos y poder reproducirlos directamente desde la aplicación web. Fue uno de los primeros proyectos en TripleTen, el cual me ayudó a entender mejor el funcionamiento de CSS y cómo los diseños bien estructurados permiten que una aplicación sea responsiva y adaptable a diferentes dispositivos.",
        tech: "HTML · CSS",
        images: [
            "assets/img/coffeeshop.png",
            "assets/img/coffeeshoprecetas.png",
            "assets/img/coffeeshopreservar.png",
            "assets/img/coffeeshopfooter.png"

        ],
        live: "https://fredyalvarezz.github.io/web_project_coffeeshop/",
        github: "https://github.com/fredyalvarezz/web_project_coffeeshop"
    }
};

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        const projectId = card.dataset.project;
        const project = projectsData[projectId];

        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalTech.textContent = project.tech;

        modalImages.innerHTML = "";
        project.images.forEach(img => {
            const image = document.createElement("img");
            image.src = img;
            modalImages.appendChild(image);
        });

        modalLinks.innerHTML = `
      <a href="${project.live}" target="_blank">Ver proyecto</a>
      <a href="${project.github}" target="_blank">Código</a>
    `;

        modal.style.display = "flex";

    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});