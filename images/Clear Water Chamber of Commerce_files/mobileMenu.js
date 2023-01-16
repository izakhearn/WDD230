let hamburger = document.querySelector("#hamburger");
let closeMenu = document.querySelector(".close-button");

hamburger.addEventListener("click", function() {
    document.querySelector("#menu-items").classList.toggle("show");
    });