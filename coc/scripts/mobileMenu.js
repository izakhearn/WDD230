let hamburger = document.querySelector("#hamburger");
let closeMenu = document.querySelector("#close-button");

hamburger.addEventListener("click", function() {
    document.querySelector("#menu-items").classList.toggle("mobileMenu");
    hamburger.classList.toggle("hide");
    closeMenu.classList.toggle("show");
    });

closeMenu.addEventListener("click", function() {
    document.querySelector("#menu-items").classList.toggle("mobileMenu");
    hamburger.classList.toggle("hide");
    closeMenu.classList.toggle("show");
    });