// Año automático en footer
document.getElementById("year").textContent = new Date().getFullYear();

const i18n = {
    "nav.home": {
        es: "Inicio",
        en: "Home"
    },

    "nav.projects": {
        es: "Proyectos",
        en: "Projects"
    },

    "nav.skills": {
        es: "Tecnologías",
        en: "Skills"
    },

    "nav.about": {
        es: "Sobre mí",
        en: "About"
    },

    "nav.contact": {
        es: "Contacto",
        en: "Contact"
    },

    "nav.openMenu": {
        es: "Abrir menú",
        en: "Open menu"
    },

    "nav.closeMenu": {
        es: "Cerrar menú",
        en: "Close menu"
    },

    "header.subtitle": {
        es: "React · Node.js · Express · MongoDB | Ingeniero en Sistemas | Soporte Técnico",
        en: "React · Node.js · Express · MongoDB | Systems Engineer | Technical Support"
    },

    "header.description": {
        es: "Construyo aplicaciones web modernas de principio a fin: desde la interfaz hasta la API y la base de datos.",
        en: "I build modern web applications end to end: from the interface to the API and the database."
    },

    "header.badge": {
        es: "Disponible para oportunidades Junior",
        en: "Available for Junior opportunities"
    },

    // Proyectos
    "projects.title": {
        es: "Proyectos",
        en: "Projects"
    },

    "projects.intro": {
        es: "Estos son los proyectos que mejor representan mi nivel actual como desarrollador full stack.",
        en: "These are the projects that best represent my current level as a full stack developer."
    },

    "projects.badgeFeatured": {
        es: "Proyecto principal",
        en: "Featured project"
    },

    "projects.problem": {
        es: "Problema:",
        en: "Problem:"
    },

    "projects.solution": {
        es: "Solución:",
        en: "Solution:"
    },

    "projects.result": {
        es: "Resultado:",
        en: "Result:"
    },

    "projects.viewDemo": {
        es: "Ver demo",
        en: "Live demo"
    },

    "projects.code": {
        es: "Código",
        en: "Code"
    },

    "projects.showMore": {
        es: "Ver más proyectos",
        en: "Show more projects"
    },

    "projects.showLess": {
        es: "Ocultar proyectos",
        en: "Hide projects"
    },

    // ABOUT
    "about.title": {
        es: "Sobre mí",
        en: "About me"
    },

    "about.p1": {
        es: "Soy <strong>Full Stack Developer Junior</strong> especializado en React, Node.js y MongoDB, apasionado por crear aplicaciones web modernas, funcionales y fáciles de usar. Actualmente busco una oportunidad como <strong>Frontend o Full Stack Junior</strong> para seguir creciendo profesionalmente y contribuir en proyectos reales.",
        en: "I'm a <strong>Full Stack Developer Junior</strong> specialized in React, Node.js and MongoDB, passionate about building modern, functional and user-friendly web applications. I'm currently looking for a <strong>Frontend or Full Stack Junior</strong> role to keep growing professionally and contribute to real projects."
    },

    "about.p2": {
        es: "Tengo experiencia desarrollando interfaces responsivas con HTML, CSS, JavaScript y React, así como construyendo APIs REST con Node.js y Express, e integrando bases de datos con MongoDB.",
        en: "I have experience building responsive interfaces with HTML, CSS, JavaScript and React, as well as building REST APIs with Node.js and Express, and integrating databases with MongoDB."
    },

    "about.p3": {
        es: "Mi experiencia previa en soporte técnico e infraestructura es un diferencial: me permite entender mejor el funcionamiento de los sistemas, identificar problemas con rapidez y desarrollar soluciones más sólidas.",
        en: "My previous experience in technical support and infrastructure is a differentiator: it helps me better understand how systems work, quickly identify problems, and build more solid solutions."
    },

    // SKILLS
    "skills.title": {
        es: "Tecnologías",
        en: "Skills"
    },

    "skills.support": {
        es: "Soporte Técnico",
        en: "Technical Support"
    },

    "skills.network": {
        es: "Redes",
        en: "Networking"
    },

    // CONTACT
    "contact.title": {
        es: "Contacto",
        en: "Contact"
    },

    // MODAL
  
    "modal.viewProject": {
        es: "Ver proyecto",
        en: "View project"
    },

    "modal.code": {
        es: "Código",
        en: "Code"
    }

};


// Idioma actual
let currentLang = localStorage.getItem("portfolioLang") || "es";

// Datos de proyectos
const projectsData = {

    barberia: {

        title: "Barbería",

        featured: true,

        featuredImages: [
            "assets/img/barberiahome.png",
            "assets/img/barberiaadmin.png"
        ],

        images: [
            "assets/img/barberiahome.png",
            "assets/img/barberiaprofile.png",
            "assets/img/barberiaadmin.png",
            "assets/img/barberiaservices.png",
            "assets/img/barberiaserviceadmin.png"
        ],

        tech: "React · Vite · Context API · Node.js · Express · MongoDB · JWT · Twilio",

        live: "https://fredyalvarezz.github.io/barberia/",

        github: "https://github.com/fredyalvarezz/barberia",

        es: {

            problem: "La gestión manual de citas y servicios generaba desorganización y pérdida de tiempo tanto para clientes como para el negocio.",

            solution: "Plataforma donde los clientes reservan citas y consultan su historial, mientras un panel administrativo controla servicios, citas, estadísticas e ingresos.",

            features: [
                "Autenticación con JWT y roles de usuario/administrador",
                "Reserva y gestión de citas en tiempo real",
                "Panel admin con estadísticas e ingresos estimados",
                "Notificaciones automáticas por WhatsApp vía Twilio"
            ],

            result: "Sistema completo con control de acceso por roles y automatización de notificaciones."
        },

        en: {

            problem: "Manually managing appointments and services created disorganization and wasted time for both clients and the business.",

            solution: "A platform where clients book appointments and check their history, while an admin panel controls services, appointments, statistics, and revenue.",

            features: [
                "JWT authentication with client/admin roles",
                "Real-time appointment booking and management",
                "Admin panel with statistics and estimated revenue",
                "Automated WhatsApp notifications via Twilio"
            ],

            result: "A complete system with role-based access control and automated notifications."
        }

    },


    bitacora: {

        title: "Sistema de Bitácora de Mantenimiento",

        titleEn: "Maintenance Log System",

        featured: true,

        featuredImages: [
            "assets/img/bitacoradashboard.png",
            "assets/img/bitacoraequipment.png"
        ],

        images: [
            "assets/img/bitacora.png",
            "assets/img/bitacoradashboard.png",
            "assets/img/bitacoraequipment.png",
            "assets/img/bitacoraincidents.png",
            "assets/img/bitacoradetail.png"
        ],

        tech: "React · Vite · React Router · Context API · Axios · Node.js · Express.js · MongoDB · Mongoose · JWT",

        live: "https://fredyalvarezz.github.io/bitacora-mantenimiento/",

        github: "https://github.com/fredyalvarezz/bitacora-mantenimiento",

        es: {

            problem: "La empresa no contaba con un sistema centralizado para dar seguimiento a equipos, incidencias y mantenimientos.",

            solution: "Sistema de bitácora que permite registrar equipos, crear y asignar incidencias, y consultar el historial de mantenimientos desde un dashboard.",

            features: [
                "Autenticación JWT con 3 niveles de acceso: admin, técnico, empleado",
                "Gestión de equipos e incidencias",
                "Historial de mantenimientos por equipo",
                "Dashboard con estadísticas"
            ],

            result: "Autorización granular por roles, validando cada operación según el usuario autenticado."
        },

        en: {

            problem: "The company had no centralized system to track equipment, incidents, and maintenance.",

            solution: "A logging system that registers equipment, creates and assigns incidents, and tracks maintenance history from a dashboard.",

            features: [
                "JWT authentication with 3 access levels: admin, technician, employee",
                "Equipment and incident management",
                "Maintenance history per equipment",
                "Dashboard with statistics"
            ],

            result: "Granular role-based authorization, validating every operation according to the authenticated user."
        }

    },


    streamwhere: {

        title: "StreamWhere",

        featured: false,

        tech: "React · Vite · Node.js · APIs REST",

        images: [
            "assets/img/streamwhere.png",
            "assets/img/streamwheremovieadd.png",
            "assets/img/streamwhereMyWatchList.png"
        ],

        live: "https://fredyalvarezz.github.io/Streamwhere",

        github: "https://github.com/fredyalvarezz/tripleten_final_project_Movies_wheretowatch.git",

        es: {

            problem: "Los usuarios pierden tiempo buscando en qué plataforma de streaming está disponible una película o serie y no cuentan con un lugar centralizado para organizar los títulos que quieren ver.",

            solution: "StreamWhere centraliza esa búsqueda integrando las APIs de TMDb y WatchMode, permitiendo a los usuarios guardar títulos en una lista personal.",

            features: [
                "Autenticación de usuarios",
                "Lista personal con estados: por ver, viendo y vistas",
                "Integración de dos APIs externas (TMDb y WatchMode)",
                "Backend propio para el almacenamiento seguro de datos"
            ],

            result: "Películas y series disponibles en un solo lugar, con la posibilidad de crear y gestionar una lista personal de títulos por ver, viendo o vistos. Proyecto final del Bootcamp de TripleTen, entregado como una aplicación full-stack funcional de principio a fin."
        },

        en: {

            problem: "Users waste time searching which streaming platform has a movie or show available and have no centralized place to organize the titles they want to watch.",

            solution: "StreamWhere centralizes that search by integrating the TMDb and WatchMode APIs, allowing users to save titles to a personal list.",

            features: [
                "User authentication",
                "Personal list with statuses: to watch, watching, and watched",
                "Integration of two external APIs (TMDb and WatchMode)",
                "Own backend for secure data storage"
            ],

            result: "Movies and shows available in one place, with the ability to create and manage a personal list of titles to watch, currently watching, or already watched. Final project of the TripleTen Bootcamp, delivered as a fully functional full-stack application from end to end."
        }

    },


    aroundusa: {

        title: "Around USA",

        featured: false,

        tech: "React · JavaScript · APIs REST",

        images: [
            "assets/img/aroundusa.png",
            "assets/img/aroundusaadd.png",
            "assets/img/aroundusaimg.png"
        ],

        live: "https://fredyalvarezz.github.io/web_project_aroundusa_frontend_demo/",

        github: "https://github.com/fredyalvarezz/web_project_api_full",

        es: {

            problem: "Necesidad de una red social simple para compartir fotografías y gestionar el perfil de usuario.",

            solution: "Frontend en React y backend en Express.js con MongoDB, con autenticación mediante tokens y rutas privadas.",

            features: [
                "Autenticación de usuarios",
                "Rutas privadas protegidas",
                "Gestión de tarjetas y perfil"
            ],

            result: "Primer proyecto full-stack completo del bootcamp; el mayor reto fue manejar estados globales en React y proteger rutas privadas."
        },

        en: {

            problem: "Need for a simple social network to share photos and manage a user profile.",

            solution: "React frontend and Express.js backend with MongoDB, with token-based authentication and private routes.",

            features: [
                "User authentication",
                "Protected private routes",
                "Card and profile management"
            ],

            result: "First complete full-stack project of the bootcamp; the main challenge was handling global state in React and protecting private routes."
        }

    },


    coffeeshop: {

        title: "Coffee Shop",

        featured: false,

        tech: "HTML · CSS",

        images: [
            "assets/img/coffeeshop.png",
            "assets/img/coffeeshoprecetas.png",
            "assets/img/coffeeshopreservar.png",
            "assets/img/coffeeshopfooter.png"
        ],

        live: "https://fredyalvarezz.github.io/web_project_coffeeshop/",

        github: "https://github.com/fredyalvarezz/web_project_coffeeshop",

        es: {

            problem: "Practicar estructura y estilos con HTML y CSS puros, siguiendo una guía de diseño estricta.",

            solution: "Landing page responsiva para un café, usando metodología BEM e integración de videos de YouTube.",

            features: [
                "Diseño responsivo",
                "Metodología BEM",
                "Integración de video embebido"
            ],

            result: "Uno de los primeros proyectos del bootcamp; afianzó fundamentos de CSS y diseño adaptable a distintos dispositivos."
        },

        en: {

            problem: "Practicing structure and styling with plain HTML and CSS, following a strict design guide.",

            solution: "A responsive landing page for a coffee shop, using the BEM methodology and embedded YouTube videos.",

            features: [
                "Responsive design",
                "BEM methodology",
                "Embedded video integration"
            ],

            result: "One of the first projects of the bootcamp; it strengthened CSS fundamentals and adaptive design across devices."
        }

    },


    miguels: {

        title: "Miguel's Baja Grill",

        featured: false,

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

        github: "https://github.com/fredyalvarezz/miguels-baja-grill-restaurant",

        es: {

            problem: "Un restaurante real en Moab, Utah necesitaba presencia web para mostrar su menú de manera más visual e información de contacto.",

            solution: "Landing page responsiva con menú, precios, ubicación y horarios, pensada para verse bien en móvil y escritorio.",

            features: [
                "Menú interactivo con precios",
                "Información de contacto y ubicación",
                "Diseño mobile-first"
            ],

            result: "Sitio funcional, con navegación sencilla y acceso rápido y mostrando la información clave."
        },

        en: {

            problem: "A real restaurant in Moab, Utah needed a web presence to showcase its menu more visually along with contact information.",

            solution: "A responsive landing page with menu, prices, location, and hours, designed to look great on both mobile and desktop.",

            features: [
                "Interactive menu with prices",
                "Contact and location information",
                "Mobile-first design"
            ],

            result: "A functional site with simple navigation and quick access to key information."
        }

    },


    restaurant: {

        title: "Restaurant Recommendation App",

        featured: false,

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

        github: "https://github.com/fredyalvarezz/restaurant-recommendation-app",

        es: {

            problem: "Los usuarios necesitan una forma de descubrir y reseñar restaurantes filtrando por categoría, ubicación y precio.",

            solution: "Aplicación full-stack con búsqueda y filtros, autenticación y gestión de reseñas propias.",

            features: [
                "Filtros por categoría, ubicación y precio",
                "Autenticación JWT",
                "CRUD de restaurantes y reseñas"
            ],

            result: "Backend REST completo con Node.js, Express y MongoDB conectado a un frontend en React con Context API."
        },

        en: {

            problem: "Users need a way to discover and review restaurants, filtering by category, location, and price.",

            solution: "A full-stack app with search and filters, authentication, and management of the user's own reviews.",

            features: [
                "Filters by category, location, and price",
                "JWT authentication",
                "CRUD for restaurants and reviews"
            ],

            result: "A complete REST backend with Node.js, Express, and MongoDB connected to a React frontend with Context API."
        }

    },


    notes: {

        title: "Notes App",

        featured: false,

        tech: "React · JavaScript · Vite · Context API · Node.js · Express.js · MongoDB · JWT",

        images: [
            "assets/img/notesapp.png",
            "assets/img/notesappnotes.png",
            "assets/img/notesappnew.png",
            "assets/img/notesappcat.png",
            "assets/img/notesappprofile.png"
        ],

        live: "https://fredyalvarezz.github.io/notes-app/",

        github: "https://github.com/fredyalvarezz/notes-app",

        es: {

            problem: "Necesidad de una app de notas organizada por categorías, con acceso solo para el usuario dueño de la cuenta.",

            solution: "App de notas con autenticación, categorías y edición de perfil.",

            features: [
                "CRUD de notas",
                "Organización por categorías",
                "Autenticación JWT"
            ],

            result: "Reforzó el manejo de Context API y autenticación en aplicaciones React."
        },

        en: {

            problem: "Need for a notes app organized by categories, accessible only to the account owner.",

            solution: "A notes app with authentication, categories, and profile editing.",

            features: [
                "Notes CRUD",
                "Organization by categories",
                "JWT authentication"
            ],

            result: "Strengthened the use of Context API and authentication in React applications."
        }

    }

};

// Orden de proyectos
const featuredOrder = [
    "barberia",
    "bitacora"
];

const otherOrder = [
    "streamwhere",
    "aroundusa",
    "coffeeshop",
    "miguels",
    "restaurant",
    "notes"
];

// Título de proyecto
function projectTitle(id) {

    const p = projectsData[id];

    if (currentLang === "en" && p.titleEn) {
        return p.titleEn;
    }

    return p.title;
}

// Render de proyectos principales
function renderFeatured() {

    const container = document.getElementById("featuredProjects");

    container.innerHTML = "";

    featuredOrder.forEach(id => {

        const p = projectsData[id];

        const t = p[currentLang];

        const imgsHtml = p.featuredImages
            .map(src =>
                `<img
                    class="project-thumb"
                    data-project="${id}"
                    src="${src}"
                    alt="${projectTitle(id)}"
                >`
            )
            .join("");

        const collageClass =
            p.featuredImages.length > 1
                ? " featured-thumb--collage"
                : "";

        const featuresHtml = t.features
            .map(f => `<li>${f}</li>`)
            .join("");

        const card = document.createElement("article");

        card.className = "featured-card";

        card.innerHTML = `
            <div class="featured-thumb${collageClass}">
                ${imgsHtml}
            </div>

            <div class="featured-card-info">

                <span
                    class="badge-featured"
                    data-i18n="projects.badgeFeatured"
                ></span>

                <h4>${projectTitle(id)}</h4>

                <p class="featured-text">
                    <strong data-i18n="projects.problem"></strong>
                    ${t.problem}
                </p>

                <p class="featured-text">
                    <strong data-i18n="projects.solution"></strong>
                    ${t.solution}
                </p>

                <ul class="feature-list">
                    ${featuresHtml}
                </ul>

                <p class="featured-result">
                    <strong data-i18n="projects.result"></strong>
                    ${t.result}
                </p>

                <p class="tech-tags">
                    ${p.tech}
                </p>

                <div class="card-links">

                    <a
                        href="${p.live}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn-link"
                        data-i18n="projects.viewDemo"
                    ></a>

                    <a
                        href="${p.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn-link btn-secondary"
                        data-i18n="projects.code"
                    ></a>

                </div>

            </div>
        `;

        container.appendChild(card);

    });

    applyStaticTranslations(container);

    attachThumbListeners();
}

// Render de otros proyectos
function renderOthers() {

    const container = document.getElementById("otherProjects");

    container.innerHTML = "";

    otherOrder.forEach(id => {

        const p = projectsData[id];

        const card = document.createElement("article");

        card.className = "project-card";

        card.innerHTML = `
            <img
                class="project-thumb"
                data-project="${id}"
                src="${p.images[0]}"
                alt="${projectTitle(id)}"
            >

            <div class="project-card-info">

                <h4>${projectTitle(id)}</h4>

                <p>${p.tech}</p>

            </div>
        `;

        container.appendChild(card);

    });

    attachThumbListeners();
}

// Modal
const modal = document.getElementById("projectModal");

const modalTitle = document.getElementById("modal-title");

const modalImages = document.getElementById("modal-images");

const modalProblem = document.getElementById("modal-problem");

const modalSolution = document.getElementById("modal-solution");

const modalFeatures = document.getElementById("modal-features");

const modalResult = document.getElementById("modal-result");

const modalTech = document.getElementById("modal-tech");

const modalLinks = document.getElementById("modal-links");

const closeModal = document.querySelector(".modal-close");


// Abrir modal
function openModal(projectId) {

    const project = projectsData[projectId];

    const t = project[currentLang];

    modalTitle.textContent = projectTitle(projectId);

    modalProblem.innerHTML =
        `<strong>${i18n["projects.problem"][currentLang]}</strong> ${t.problem}`;

    modalSolution.innerHTML =
        `<strong>${i18n["projects.solution"][currentLang]}</strong> ${t.solution}`;


    modalFeatures.innerHTML = "";

    t.features.forEach(feature => {

        const li = document.createElement("li");

        li.textContent = feature;

        modalFeatures.appendChild(li);

    });


    modalResult.innerHTML =
        `<strong>${i18n["projects.result"][currentLang]}</strong> ${t.result}`;

    modalTech.textContent = project.tech;


    modalImages.innerHTML = "";

    project.images.forEach(img => {

        const image = document.createElement("img");

        image.src = img;

        image.alt = projectTitle(projectId);

        modalImages.appendChild(image);

    });


    modalLinks.innerHTML = `
        <a
            href="${project.live}"
            target="_blank"
            rel="noopener noreferrer"
        >
            ${i18n["modal.viewProject"][currentLang]}
        </a>

        <a
            href="${project.github}"
            target="_blank"
            rel="noopener noreferrer"
        >
            ${i18n["modal.code"][currentLang]}
        </a>
    `;


    modal.style.display = "flex";
}

// Click en imágenes

function attachThumbListeners() {

    document
        .querySelectorAll(".project-thumb")
        .forEach(thumb => {

            thumb.addEventListener("click", () => {

                openModal(thumb.dataset.project);

            });

        });

}

// Cerrar modal

function hideModal() {

    modal.style.display = "none";

}

closeModal.addEventListener("click", hideModal);


window.addEventListener("click", e => {

    if (e.target === modal) {

        hideModal();

    }

});


document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        hideModal();

    }

});

// Toggle de otros proyectos
const toggleBtn =
    document.getElementById("toggleProjectsBtn");

const otherProjectsWrapper =
    document.getElementById("otherProjectsWrapper");

let othersExpanded = false;


function updateToggleLabel() {

    const key =
        othersExpanded
            ? "projects.showLess"
            : "projects.showMore";

    const arrow =
        othersExpanded
            ? "▴"
            : "▾";

    toggleBtn.innerHTML =
        `${i18n[key][currentLang]}
        <span class="toggle-arrow">${arrow}</span>`;

}


toggleBtn.addEventListener("click", () => {

    othersExpanded = !othersExpanded;

    otherProjectsWrapper.classList.toggle(
        "hidden",
        !othersExpanded
    );

    toggleBtn.setAttribute(
        "aria-expanded",
        String(othersExpanded)
    );

    updateToggleLabel();


    if (othersExpanded) {

        otherProjectsWrapper.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }

});

// Traducciones estáticas
function applyStaticTranslations(scope = document) {

    scope
        .querySelectorAll("[data-i18n]")
        .forEach(el => {

            const key = el.dataset.i18n;

            if (i18n[key]) {

                el.innerHTML =
                    i18n[key][currentLang];

            }

        });

}



// Menú hamburguesa
const navToggle =
    document.getElementById("navToggle");

const navMenu =
    document.getElementById("navMenu");

const navLinks =
    document.querySelectorAll(".nav__links a");


// Actualizar accesibilidad del botón
function updateNavAccessibility(isOpen) {

    const labelKey =
        isOpen
            ? "nav.closeMenu"
            : "nav.openMenu";

    navToggle.setAttribute(
        "aria-label",
        i18n[labelKey][currentLang]
    );

    navToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

}

// Abrir / cerrar menú
function toggleNavMenu() {

    const isOpen =
        navMenu.classList.toggle("active");

    navToggle.classList.toggle(
        "active",
        isOpen
    );

    updateNavAccessibility(isOpen);

}

// Click en menú hamburguesa
navToggle.addEventListener(
    "click",
    toggleNavMenu
);


// Cerrar menú al seleccionar una sección
navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        navToggle.classList.remove("active");

        updateNavAccessibility(false);

    });

});


// Idioma
function setLanguage(lang) {

    currentLang = lang;

    localStorage.setItem(
        "portfolioLang",
        lang
    );


    document.documentElement.lang = lang;


    // Botón activo
    document
        .querySelectorAll(".lang-btn")
        .forEach(btn => {

            btn.classList.toggle(
                "active",
                btn.dataset.lang === lang
            );

        });


    // Traducciones
    applyStaticTranslations();


    // Proyectos
    renderFeatured();

    renderOthers();

    updateToggleLabel();

    const isMenuOpen =
        navMenu.classList.contains("active");

    updateNavAccessibility(isMenuOpen);


    // Cerrar modal al cambiar idioma
    if (modal.style.display === "flex") {

        modal.style.display = "none";

    }

}


// Botones de idioma
document
    .querySelectorAll(".lang-btn")
    .forEach(btn => {

        btn.addEventListener(
            "click",
            () => {

                setLanguage(
                    btn.dataset.lang
                );

            }
        );

    });


// Cerrar menu cuando se vuelve a escritorio
window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        navMenu.classList.remove("active");

        navToggle.classList.remove("active");

        updateNavAccessibility(false);

    }

});

// Inicializacion de lenguaje
setLanguage(currentLang);