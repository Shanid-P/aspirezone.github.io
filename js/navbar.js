//navbar bg changing when scrolling
let navbar = document.querySelector('.navbar');
let logoText = document.querySelector('.logo-text');
let logo = document.querySelector('.fa-futbol');
let barIcon = document.querySelector('.fa-bars');
let navLinks = document.querySelectorAll('.navbar-link');
let menu = document.querySelector(".navUL");

//function for hamburger icon
function showNav(){
    console.log("hi")
    menu.classList.toggle('menu-active');
}

window.onscroll = () => {
    menu.classList.remove('menu-active');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-active');
        logoText.classList.add('navbar-active-text');
        logo.classList.add('navbar-active-text');
        barIcon.classList.add('navbar-active-text');
        for (let i = 0; i < navLinks.length; i++) {
            let navLink = navLinks[i];
            navLink.classList.add('navbar-active-text');
        }
    } else {
        navbar.classList.remove('navbar-active');
        navbar.classList.remove('navbar-active');
        logoText.classList.remove('navbar-active-text');
        logo.classList.remove('navbar-active-text');
        barIcon.classList.remove('navbar-active-text');
        for (let i = 0; i < navLinks.length; i++) {
            let navLink = navLinks[i];
            navLink.classList.remove('navbar-active-text');
        }
    }
};

barIcon.addEventListener("click", showNav);