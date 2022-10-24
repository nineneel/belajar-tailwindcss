// navbar fixed
window.onscroll = () => {
    const navbar = document.querySelector("header");
    const fixedNav = navbar.offsetTop;

    if (fixedNav < window.pageYOffset) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
};

// hamburger
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburgerButton.addEventListener("click", () => {
    hamburgerButton.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});
