var hamburgerButton = document.querySelector("#hamburger-button");
var menuLinks = document.querySelector("#menu_links");

hamburgerButton.addEventListener("click", menuToggle);

function menuToggle(evt){
    hamburgerButton.classList.toggle("menu_button_closed");
    hamburgerButton.classList.toggle("menu_button_openend");
    menuLinks.classList.toggle("verborgen");
}