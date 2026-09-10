const navLinks = [
    { name: "Home", url: "index.html" },
    { name: "About", url: "about.html" },
    { name: "Projects", url: "projects.html" },
    { name: "Contact", url: "contact.html" }
];

function buildNavigation() {
    const nav = document.getElementById("main-nav");

    if (!nav) return;

    nav.setAttribute("aria-label", "Main navigation");

    nav.innerHTML = navLinks
        .map(link => `<a href="${link.url}">${link.name}</a>`)
        .join("");
}

document.addEventListener("DOMContentLoaded", buildNavigation);
