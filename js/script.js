//navbar bg changing when scrolling
let navbar = document.querySelector('.navbar');
let logoText = document.querySelector('.logo-text');
let logo = document.querySelector('.fa-futbol');
let barIcon = document.querySelector('.fa-bars');
let navLinks = document.querySelectorAll('.navbar-link');
let menu = document.querySelector(".navUL");
let mouse = document.querySelector(".mouse_scroll");


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
//function for hamburger icon
function showNav(){
    menu.classList.toggle('menu-active');
}
mouse.addEventListener("click",() =>{
    window.scrollTo(0,900);
})
barIcon.addEventListener("click", showNav);

//
var details = document.querySelectorAll(".details");
var questions = document.querySelector(".question-part");
var angleUp = document.querySelectorAll(".fa-angle-up");
var angleDown = document.querySelectorAll(".fa-angle-down");

angleUp.forEach((angleup) => {
    angleup.addEventListener("click", (event) =>{
        element = event.target;
        element.parentElement.open = false;
    })
})

angleDown.forEach((angledown) => {
    angledown.addEventListener("click", (event) =>{
        element = event.target;
        element.parentElement.open = true;
    })
})
details.forEach((detail) => {
    detail.addEventListener("toggle", (event) =>{
        element = event.target;
        if(detail.open){
            element.querySelector(".fa-angle-down").style.cssText = "display: none";
        }else{
            element.querySelector(".fa-angle-down").style.cssText = "display: block";
        }
    })
})

//input box line 
let inputBoxes = document.querySelectorAll(".input-group input");
let textArea = document.querySelector(".input-group textarea");

inputBoxes.forEach((inputBox) => {
    inputBox.addEventListener("input", (event) =>{
        let element = event.target;
        let line = element.parentElement.querySelector(".line");
        if (inputBox.value) {
            line.style.cssText = "background: var(--primary);"
        } else {
            line.style.cssText = "background: #888;"
        }
    })
});
textArea.addEventListener("input", (event) =>{
    let line = textArea.parentElement.querySelector(".line");
    if (textArea.value) {
        line.style.cssText = "background: var(--primary);"
    } else {
        textArea.style.cssText = "background: #888;"
    }
})
