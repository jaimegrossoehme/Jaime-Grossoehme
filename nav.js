// Reusable navigation builder

const navLinks = [
    {
        name: "Home",
        url: "index.html"
    },
    {
        name: "About",
        url: "about.html"
    },
    {
        name: "Projects",
        url: "projects.html"
    },
    {
        name: "Contact",
        url: "contact.html"
    }
];

function buildNavigation() {

    const nav = document.getElementById("main-nav");

    if (!nav) return;

    nav.innerHTML = navLinks
        .map(link => {
            return `<a href="${link.url}">${link.name}</a>`;
        })
        .join("");
}

document.addEventListener(
    "DOMContentLoaded",
    buildNavigation
);
