let mouse = document.querySelector(".mouse_scroll");

mouse.addEventListener("click",() =>{
    window.scrollTo(0,900);
})


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
