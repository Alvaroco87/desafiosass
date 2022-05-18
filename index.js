const navToggle = document.querySelector(".toggle")
const navMenu = document.querySelector(".nav-header")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-header_visible")
}) 