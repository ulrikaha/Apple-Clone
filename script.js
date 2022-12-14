const hamburger = document.querySelector(".hamburger");
const navBarLinks = document.querySelector(".navbar-links-header");
const shopMenu = document.querySelector(".menulinks-header");
const shopIcon = document.querySelector(".shop-logo-header");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBarLinks.classList.toggle("active");
})

shopIcon.addEventListener("click", () => {
    shopMenu.classList.toggle("active");
})