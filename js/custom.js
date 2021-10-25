// log in section
var email=document.getElementById("email");
var password=document.getElementById("password");

function call(){
    // email err
    if(email.value == ""){
        email.style.borderColor="#d22222";
        document.getElementById("emailerror").innerHTML="please enter your email";
        email.focus();
        email.style.outline="none";
        return false;
    } 
    // pass err
    if(password.value == ""){
        password.style.borderColor="#d22222";
        document.getElementById("passerror").innerHTML="please enter your password";
        password.focus();
        password.style.outline="none";
        return false;
    }
    if(password.value.length <= 7){
        password.style.borderColor="#d22222";
        document.getElementById("passerror").innerHTML="please enter at least 8 charecter";
        password.focus();
        password.style.outline="none";
        return false;
    }
}

function recall(){
    //email err remove 
    if(email.value != ""){
        email.style.borderColor="#dfe1e4";
        document.getElementById("emailerror").innerHTML="";
    }
    // pass err remove
    if(password.value != ""){
        password.style.borderColor="#dfe1e4";
        document.getElementById("passerror").innerHTML="";
    }
}
email.addEventListener("blur",recall);
password.addEventListener("blur",recall);

// sign up section
var firstname = document.getElementById("firstname");
var firsterr = document.getElementById("firsterr");

var surname = document.getElementById("surname");
var surerr = document.getElementById("surerr");

var mail = document.getElementById("mail");
var mailerr = document.getElementById("mailerr");

var pass = document.getElementById("pass");
var passerr = document.getElementById("passerr");

var confirmpass = document.getElementById("confirmpass");
var confirmerr = document.getElementById("confirmerr");

// err show
function enter(){
    // firstname err
    if(firstname.value == ""){
        firstname.style.borderColor="#d22222";
        firsterr.innerHTML="Enter your firstname";
        firstname.focus();
        return false;
    }
    // surname err
    if(surname.value == ""){
        surname.style.borderColor="#d22222";
        surerr.innerHTML="Enter your surname";
        surname.focus();
        return false;
    }
    // mail err
    if(mail.value == ""){
        mail.style.borderColor="#d22222";
        mailerr.innerHTML="Enter your Email";
        mail.focus();
        return false;
    }
    // pass err
    if(pass.value == ""){
        pass.style.borderColor="#d22222";
        passerr.innerHTML="Enter your password";
        pass.focus();
        return false;
    }
    // pass err at least 8 charecter
    if(pass.value.length <= 7){
        pass.style.borderColor="#d22222";
        passerr.innerHTML="Enter at least 8 charecter";
        pass.focus();
        return false;
    }
    // confirm pass err
    if(confirmpass.value == "" ){
        confirmpass.style.borderColor="#d22222";
        confirmerr.innerHTML="Please confirm your password";
        confirmpass.focus();
        return false;
    }

    if(confirmpass.value != pass.value ){
        confirmpass.style.borderColor="#d22222";
        confirmerr.innerHTML="password did not match";
        confirmpass.focus();
        return false;
    }
}

// err remove
function remove(){
    // firstname err remove
    if(firstname.value != ""){
        firstname.style.borderColor="#ccd0d5";
        firsterr.innerHTML="";
    }
    
    // surname err remove
    if(surname.value != ""){
        surname.style.borderColor="#ccd0d5";
        surerr.innerHTML="";
    }
    // mail err remove
    if(mail.value != ""){
        mail.style.borderColor="#ccd0d5";
        mailerr.innerHTML="";
    }
    // pass err remove
    if(pass.value != ""){
        pass.style.borderColor="#ccd0d5";
        passerr.innerHTML="";
    }
    // confirmpass err remove
    if(confirmpass.value == pass.value ){
        confirmpass.style.borderColor="#ccd0d5";
        confirmerr.innerHTML="";
    }
}
firstname.addEventListener("blur",remove);
surname.addEventListener("blur",remove);
mail.addEventListener("blur",remove);
pass.addEventListener("blur",remove);
confirmpass.addEventListener("blur",remove);

// modal
var create =document.getElementById("create");
function trigger(){
    create.style.display="flex";
}
// remove sign up form
var back = document.getElementById("back");
function cross(){
    create.style.display="none";
}
