document.addEventListener("DOMContentLoaded", function () {

    const navigation = `
        <nav class="main-nav">

            <a href="index.html">Home</a>

            <a href="about.html">About</a>

            <a href="experience.html">Experience</a>

            <a href="projects.html">Projects</a>

            <a href="contact.html">Contact</a>

        </nav>
    `;

    const navContainer = document.getElementById("site-nav");

    if (navContainer) {
        navContainer.innerHTML = navigation;
    }

    // Highlight the current page
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

});
// nav.js — reusable navigation builder

const navLinks = [
    { name: "Home", url: "index.html" },
    { name: "About", url: "about.html" },
    { name: "Projects", url: "projects.html" },
    { name: "Contact", url: "contact.html" }
];

function buildNavigation() {
    const nav = document.getElementById("main-nav");
    if (!nav) return;

    nav.innerHTML = navLinks
        .map(link => `<a href="${link.url}">${link.name}</a>`)
        .join("");
}

document.addEventListener("DOMContentLoaded", buildNavigation);
