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
    },

    barberia: {
        title: "Barbería",
        description:
            "Aplicación web full-stack para la gestión y reserva de citas de una barbería. Los clientes pueden registrarse, seleccionar servicios, consultar horarios disponibles, reservar citas y administrar su historial. Incluye un panel administrativo para gestionar citas, servicios, estadísticas e ingresos estimados. El backend está desarrollado con Node.js, Express y MongoDB, e incluye autenticación mediante JWT, autorización basada en roles y una integración con Twilio para notificaciones de WhatsApp.",
        tech: "React · JavaScript · Vite · React Router · Context API · Node.js · Express.js · MongoDB · JWT · Twilio",
        images: [
            "assets/img/barberiahome.png",
            "assets/img/barberiaprofile.png",
            "assets/img/barberiaadmin.png",
            "assets/img/barberiaservices.png",
            "assets/img/barberiaserviceadmin.png"
        ],
        live: "https://fredyalvarezz.github.io/barberia/",
        github: "https://github.com/fredyalvarezz/barberia"
    },

    miguels: {
        title: "Miguel's Baja Grill",
        description: "Landing page responsive desarrollada para un restaurante real ubicado en Moab, Utah. El sitio presenta el menú, platillos, precios, información del restaurante, ubicación, horarios y diferentes formas de contacto. Fue diseñado para ofrecer una navegación sencilla y facilitar el acceso a la información más importante desde dispositivos móviles y escritorio.",
        tech: "React · JavaScript · HTML5 · CSS3 · Vite · React Icons",
        images: [
            "assets/img/miguelsbajagrill.png",
            "assets/img/miguelsmenu.png",
            "assets/img/miguelsmenu2.png",
            "assets/img/miguelsdrinks.png",
            "assets/img/miguelsdrinks2.png",
            "assets/img/miguelsfindus.png",
            "assets/img/miguelscontact.png"
        ],
        live: "https://fredyalvarezz.github.io/miguels-baja-grill-restaurant/",
        github: "https://github.com/fredyalvarezz/miguels-baja-grill-restaurant"
    },

    restaurant: {
        title: "Restaurant Recommendation App",
        description: "Aplicación web full-stack para descubrir, agregar y reseñar restaurantes. Permite registrarse, iniciar sesión, buscar restaurantes, filtrarlos por categoría, ubicación y precio, además de administrar restaurantes y reseñas propias. El frontend está desarrollado con React y Context API, mientras que el backend está preparado con Node.js, Express, MongoDB, autenticación JWT y autorización de usuarios.",
        tech: "React · JavaScript · Node.js · Express.js · MongoDB · Mongoose · REST API · JWT",
        images: [
            "assets/img/restaurantapp.png",
            "assets/img/restaurantapp2.png",
            "assets/img/restaurantdetails.png",
            "assets/img/restaurantdetails2.png",
            "assets/img/restaurantsearch.png",
            "assets/img/restaurantlogin.png",
            "assets/img/restaurantadd.png"

        ],
        live: "https://fredyalvarezz.github.io/restaurant-recommendation-app/",
        github: "https://github.com/fredyalvarezz/restaurant-recommendation-app"
    },

    notes: {
        title: "Notes App",
        description:
            "Aplicación web de notas con autenticación y organización por categorías. Permite crear, editar, eliminar y buscar notas, además de administrar el perfil del usuario. El frontend está desarrollado con React y Context API, mientras que el backend está preparado con Node.js, Express, MongoDB y autenticación mediante JWT.",
        tech: "React · JavaScript · Vite · Context API · LocalStorage · Node.js · Express.js · MongoDB · JWT",
        images: [
            "assets/img/notesapp.png",
            "assets/img/notesappnotes.png",
            "assets/img/notesappnew.png",
            "assets/img/notesappcat.png",
            "assets/img/notesappprofile.png"
        ],
        live: "https://fredyalvarezz.github.io/notes-app/",
        github: "https://github.com/fredyalvarezz/notes-app"
    },

    bitacora: {
        title: "Sistema de Bitácora de Mantenimiento",
        description:
            "Aplicación web full-stack desarrollada para centralizar la gestión de equipos, incidencias y mantenimientos de una empresa. El sistema cuenta con autenticación mediante JWT y diferentes niveles de acceso para administradores, técnicos y empleados. Permite gestionar equipos, crear y asignar incidencias, consultar historiales de mantenimiento y visualizar estadísticas desde un dashboard. El backend está desarrollado con Node.js, Express y MongoDB, implementando autorización por roles y validación de las operaciones según el usuario autenticado.",
        tech: "React · Vite · React Router · Context API · Axios · Node.js · Express.js · MongoDB · Mongoose · JWT",
        images: [
            "assets/img/bitacora.png",
            "assets/img/bitacoradashboard.png",
            "assets/img/bitacoraequipment.png",
            "assets/img/bitacoraincidents.png",
            "assets/img/bitacoradetail.png"
        ],
        live: "https://fredyalvarezz.github.io/bitacora-mantenimiento/",
        github: "https://github.com/fredyalvarezz/bitacora-mantenimiento"
    },



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