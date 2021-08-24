function validate() {
    
    if (myform.username.value === "eduardonacion") {
        document.getElementById('errfn').innerHTML = "this is valid name"
        document.getElementById('errfn').style.color = "green";
        document.getElementById('errfn').style.fontSize = "12px";

        
    } else {
        document.getElementById('errfn').innerHTML = "this is not valid name"
        document.getElementById('errfn').style.color = "red";
        document.getElementById('errfn').style.fontSize = "12px";

    }
    if (myform.password.value === "okie") {
        document.getElementById('errpwd').innerHTML = "this password is valid"
        document.getElementById('errpwd').style.color = "green";
        document.getElementById('errpwd').style.fontSize = "12px";

        
    } else {
        document.getElementById('errpwd').innerHTML = "this password is not valid"
        document.getElementById('errpwd').style.color = "red";
        document.getElementById('errpwd').style.fontSize = "12px";

    }
    if (myform.confirmPassword.value === "okie") {
        document.getElementById('errconpwd').innerHTML = "this password match"
        document.getElementById('errconpwd').style.color = "green";
        document.getElementById('errconpwd').style.fontSize = "12px";

        
    } else {
        document.getElementById('errconpwd').innerHTML = "this password does not match"
        document.getElementById('errconpwd').style.color = "red";
        document.getElementById('errconpwd').style.fontSize = "12px";

    }

    
}
function checkFilled() {
    const username = document.getElementById("username");
    const pass = document.getElementById("password");
    const cpass = document.getElementById("confirmPassword");
    const email = document.getElementById("email");

    if (username.value === "eduardonacion") {
        username.style.backgroundColor = "rgb(214, 243, 168)";
    }
    else{
        username.style.backgroundColor = "rgb(236, 163, 163)";
    }
    if (pass.value === "okie") {
        pass.style.backgroundColor = "rgb(214, 243, 168)";
    }
    else{
        pass.style.backgroundColor = "rgb(236, 163, 163)";
    }
    if (cpass.value === "okie") {
        cpass.style.backgroundColor = "rgb(214, 243, 168)";
    }
    else{
        cpass.style.backgroundColor = "rgb(236, 163, 163)";
    }
    if (email.value === "") {
        email.style.backgroundColor = "rgb(214, 243, 168)";
    }

}
checkFilled();





/*
    if(user === "eduardonacion" && password === "okie"){
    alert("Sign In Succesful")
}else{
    alert("Failed Sign In")
}
}

function errorMessage() {
let user = document.getElementById("username").value;
let password = document.getElementById("password").value;
let rePassword = document.getElementById("confirmPassword").value;
let email = document.getElementById("email").value;

var error = document.getElementById("error")
if ( user  === "eduardonacion" && password === "okie" && confirmPassword === "okie") {
    error.textContent = "Nice one success"
    error.style.color = "blue"
} else {
    error.textContent = "Error"
}
}

let user = document.getElementById("username").value;
let password = document.getElementById("password").value;
let rePassword = document.getElementById("confirmPassword").value;
let bdnendndemail = document.getElementById("email").value;
 
*/
