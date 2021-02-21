const form = document.getElementById('form');
const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password-confirm');

   



form.addEventListener('submit', (e)=> {
    e.preventDefault();
     if(fullName.value == '') {
        errorFunc(fullName)
    }
    else {
        successFunc(fullName)
    };
    if(email.value == '') {
        errorFunc(email)
    }
    else {
        successFunc(email)
    };
     if(password.value == '') {
        errorFunc(password)
    }
    else {
        successFunc(password)
    };
     if(confirmPassword.value == '') {
        errorFunc(confirmPassword)
    }
    else {
        successFunc(confirmPassword)
    };
    
    

    

   
})


function errorFunc(input) {
    const inputForm = input.parentElement;
inputForm.className = 'form-input error'
}

function successFunc(input){
 const inputForm = input.parentElement;
inputForm.className  = 'form-input success'
}