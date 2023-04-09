let submitBtn = document.getElementById('submit');

let Bname = document.querySelector(".name-field input");
let Bphone = document.querySelector(".phone-field input");
let Bdate = document.querySelector(".date-field input");
let Bstime = document.querySelector(".stime-field input");
let Betime = document.querySelector(".etime-field input");
let Bplayer = document.querySelector(".players-field input");
let Bamount = document.querySelector(".amount-field input");

let BstimeVal = Bstime.value;
let BetimeVal = Betime.value;
let BplayerVal = Bplayer.value;

let form = document.getElementById("formName");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("hi");

    let tickN = form.querySelector(".name-field .fa-check-circle")
    let tickP = form.querySelector(".phone-field .fa-check-circle")
    let tickD = form.querySelector(".date-field .fa-check-circle")
    let tickS = form.querySelector(".stime-field .fa-check-circle")
    let tickE = form.querySelector(".etime-field .fa-check-circle")
    let tickL = form.querySelector(".players-field .fa-check-circle")

    var styleN = window.getComputedStyle(tickN);
    var styleP = window.getComputedStyle(tickP);
    var styleD = window.getComputedStyle(tickD);
    var styleS = window.getComputedStyle(tickS);
    var styleE = window.getComputedStyle(tickE);
    var styleL = window.getComputedStyle(tickL);

    if(styleN.visibility === 'hidden' || styleP.visibility === 'hidden' || styleD.visibility === 'hidden' || styleS.visibility === 'hidden' || styleE.visibility === 'hidden' || styleL.visibility === 'hidden' ){
        console.log("entering into procedure")
        if(styleN.visibility === 'hidden'){
            Bname.focus()
        }else if(styleP.visibility === 'hidden'){
            Bphone.focus()
        }else if(styleD.visibility === 'hidden'){
            Bdate.focus()
        }else if(styleS.visibility === 'hidden'){
            Bstime.focus()
        }else if(styleE.visibility === 'hidden'){
            Betime.focus()
        }else if(styleL.visibility === 'hidden'){
            Bplayer.focus()
        }
    }else{
        console.log("succesfully submitted");
        const scriptURL = 'https://script.google.com/macros/s/AKfycbx7h3wlAFfGgks1kTBLbLglsJOd7ak6kTcaRbpit18_kyXZgSk6rjTskjq4xhrcYtCk/exec';
        
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => swal({
                title: "Done!",
                text: "Your booking is completed!",
                icon: "success",
                button: "Ok!",
              }))
            .then(() => {  window.location.reload(); })
            .catch(error => console.error('Error!', error.message))
    }
});
//checking validity of name
Bname.addEventListener("focusout", (event)=>{
    let BnameVal = Bname.value;

    let PE = event.target.parentElement;
    const nameRGEX =/^[a-zA-Z ]{3,30}$/;
    let nameResult = nameRGEX.test(BnameVal);
    if(nameResult == false){
        navigator.vibrate(100);
        PE.querySelector(".fa-exclamation-circle").style.cssText = "visibility: visible;";
        PE.querySelector(".fa-check-circle").style.cssText = "visibility: hidden;";
        PE.querySelector("small").style.cssText = "visibility: visible;";
    }else{
        PE.querySelector(".fa-check-circle").style.cssText = "visibility: visible;";
        PE.querySelector(".fa-exclamation-circle").style.cssText = "visibility: hidden;";
        PE.querySelector("small").style.cssText = "visibility: hidden;"; 
    }
})

//checking validity of phone
Bphone.addEventListener("focusout", (event)=>{
    let BphoneVal = Bphone.value;
    let PE = event.target.parentElement;
    const phoneRGEX = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let phoneResult = phoneRGEX.test(BphoneVal);
    if(phoneResult == false){
        navigator.vibrate(100);
        PE.querySelector(".fa-exclamation-circle").style.cssText = "visibility: visible;";
        PE.querySelector(".fa-check-circle").style.cssText = "visibility: hidden;";
        PE.querySelector("small").style.cssText = "visibility: visible;";
    }else{
        PE.querySelector(".fa-check-circle").style.cssText = "visibility: visible;";
        PE.querySelector(".fa-exclamation-circle").style.cssText = "visibility: hidden;";
        PE.querySelector("small").style.cssText = "visibility: hidden;"; 
    }
})

//checking validity of date
Bdate.addEventListener("focusout", (event)=>{
    let BdateVal = new Date(Bdate.value);

    let PE = event.target.parentElement;

    let today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if(BdateVal < today || BdateVal == "Invalid Date" || BdateVal == ""){
        navigator.vibrate(100);
        PE.querySelector(".fa-exclamation-circle").style.cssText = "visibility: visible;";
        PE.querySelector(".fa-check-circle").style.cssText = "visibility: hidden;";
        PE.querySelector("small").style.cssText = "visibility: visible;";
    }else{
        PE.querySelector(".fa-check-circle").style.cssText = "visibility: visible;";
        PE.querySelector(".fa-exclamation-circle").style.cssText = "visibility: hidden;";
        PE.querySelector("small").style.cssText = "visibility: hidden;"; 
    }
    
})

//checking validity of starting time
Bstime.addEventListener("focusout", (event)=>{
    let BstimeVal = Bstime.value;
    let BdateVal = Bdate.value;
    
    let PE = event.target.parentElement;
    
    let selectedDateTime = new Date(BdateVal + " " + BstimeVal);
    let today = new Date();

    if(selectedDateTime < today || selectedDateTime == "Invalid Date"){
        navigator.vibrate(100);
        PE.querySelector(".fa-exclamation-circle").style.cssText = "visibility: visible;";
        PE.querySelector(".fa-check-circle").style.cssText = "visibility: hidden;";
        PE.querySelector("small").style.cssText = "visibility: visible;";
    }else{
        PE.querySelector(".fa-check-circle").style.cssText = "visibility: visible;";
        PE.querySelector(".fa-exclamation-circle").style.cssText = "visibility: hidden;";
        PE.querySelector("small").style.cssText = "visibility: hidden;"; 
        getAmount(BstimeVal);
    }
})

//checking validity of ending time
Betime.addEventListener("focusout", (event)=>{
    let BetimeVal = Betime.value;
    let BstimeVal = Bstime.value;
    
    let PE = event.target.parentElement;
    
    if(BetimeVal == "" || BetimeVal < BstimeVal){
        navigator.vibrate(100);
        PE.querySelector(".fa-exclamation-circle").style.cssText = "visibility: visible;";
        PE.querySelector(".fa-check-circle").style.cssText = "visibility: hidden;";
        PE.querySelector("small").style.cssText = "visibility: visible;";
    }else{
        PE.querySelector(".fa-check-circle").style.cssText = "visibility: visible;";
        PE.querySelector(".fa-exclamation-circle").style.cssText = "visibility: hidden;";
        PE.querySelector("small").style.cssText = "visibility: hidden;"; 
        getAmount(BetimeVal);
    }
})

//checking validity of no of players
Bplayer.addEventListener("focusout", (event)=>{
    let BplayerVal = Bplayer.value;
    
    let PE = event.target.parentElement;

    if(BplayerVal !== "" && BplayerVal <= 24 && BplayerVal >=4){
        PE.querySelector(".fa-check-circle").style.cssText = "visibility: visible;";
        PE.querySelector(".fa-exclamation-circle").style.cssText = "visibility: hidden;";
        PE.querySelector("small").style.cssText = "visibility: hidden;"; 
        getAmount(BplayerVal);
    }else{
        navigator.vibrate(100);
        PE.querySelector(".fa-exclamation-circle").style.cssText = "visibility: visible;";
        PE.querySelector(".fa-check-circle").style.cssText = "visibility: hidden;";
        PE.querySelector("small").style.cssText = "visibility: visible;";
    }
})

//updating the value of amount
function getAmount(BetimeVal, BstimeVal, BplayerVal){
    let amt;
    
    BstimeVal = Bstime.value;
    BetimeVal = Betime.value;
    BplayerVal = Bplayer.value;

    let startDate = new Date("2023/01/01 " + BstimeVal);
    let endDate = new Date("2023/01/01 " + BetimeVal);

    let interval = endDate.getTime() - startDate.getTime();
    let hours = Math.floor(interval / 1000 / 60 / 60);

    amt = hours*70*BplayerVal;

    Bamount.value = amt;
}

// submitBtn.addEventListener("click", getData);

getAmount();

