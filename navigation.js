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
