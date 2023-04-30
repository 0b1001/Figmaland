'use strict'

const mobileMenuButton = document.getElementById("mobile-menu-button");

mobileMenuButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("mobile-menu")
})
