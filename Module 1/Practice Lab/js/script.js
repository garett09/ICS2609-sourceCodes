function validate() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')


    if (myform.username.value === "admin") {
        document.getElementById('errfn').innerHTML = "this is valid name"
        document.getElementById('errfn').style.color = "green";
        document.getElementById('errfn').style.fontSize = "12px";

        
    } else {
        document.getElementById('errfn').innerHTML = "this is not valid name"
        document.getElementById('errfn').style.color = "red";
        document.getElementById('errfn').style.fontSize = "12px";

    }
    if (strongPassword.test(myform.password.value)) {
        document.getElementById('errpwd').innerHTML = "Strong Password"
        document.getElementById('errpwd').style.color = "green";
        document.getElementById('errpwd').style.fontSize = "12px";

        
    } else {
        document.getElementById('errpwd').innerHTML = "Weak Password"
        document.getElementById('errpwd').style.color = "red";
        document.getElementById('errpwd').style.fontSize = "12px";

    }
    if (myform.confirmPassword.value === myform.password.value) {
        document.getElementById('errconpwd').innerHTML = "this password match"
        document.getElementById('errconpwd').style.color = "green";
        document.getElementById('errconpwd').style.fontSize = "12px";

        
    } else {
        document.getElementById('errconpwd').innerHTML = "this password does not match"
        document.getElementById('errconpwd').style.color = "red";
        document.getElementById('errconpwd').style.fontSize = "12px";

    }
    if (myform.email.value.match(mailformat)){
        document.getElementById('errema').innerHTML = "This email is valid"
        document.getElementById('errema').style.color = "green";
        document.getElementById('errema').style.fontSize = "12px";
    }else{
        document.getElementById('errema').innerHTML = "This email is invalid"
        document.getElementById('errema').style.color = "red";
        document.getElementById('errema').style.fontSize = "12px";
    }

  }
  if (myform.password.value === "okie") {
    document.getElementById("errpwd").innerHTML = "this password is valid";
    document.getElementById("errpwd").style.color = "green";
    document.getElementById("errpwd").style.fontSize = "12px";
  } else {
    document.getElementById("errpwd").innerHTML = "this password is not valid";
    document.getElementById("errpwd").style.color = "red";
    document.getElementById("errpwd").style.fontSize = "12px";
  }
  if (myform.confirmPassword.value === "okie") {
    document.getElementById("errconpwd").innerHTML = "this password match";
    document.getElementById("errconpwd").style.color = "green";
    document.getElementById("errconpwd").style.fontSize = "12px";
  } else {
    document.getElementById("errconpwd").innerHTML =
      "this password does not match";
    document.getElementById("errconpwd").style.color = "red";
    document.getElementById("errconpwd").style.fontSize = "12px";
  }
  if (myform.email.value.match(mailformat)) {
    document.getElementById("errema").innerHTML = "This email is valid";
    document.getElementById("errema").style.color = "green";
    document.getElementById("errema").style.fontSize = "12px";
  } else {
    document.getElementById("errema").innerHTML = "This email is invalid";
    document.getElementById("errema").style.color = "red";
    document.getElementById("errema").style.fontSize = "12px";
  }
}

function checkFilled() {
  const username = document.getElementById("username");
  const pass = document.getElementById("password");
  const cpass = document.getElementById("confirmPassword");
  const email = document.getElementById("email");
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (username.value === "admin") {
        username.style.backgroundColor = "rgb(214, 243, 168)";
    }
    else{
        username.style.backgroundColor = "rgb(236, 163, 163)";
    }
    if (pass.value === "Ilovecoding123!") {
        pass.style.backgroundColor = "rgb(214, 243, 168)";
    }
    else{
        pass.style.backgroundColor = "rgb(236, 163, 163)";
    }
    if (cpass.value === pass.value) {
        cpass.style.backgroundColor = "rgb(214, 243, 168)";
    }
    else{
        cpass.style.backgroundColor = "rgb(236, 163, 163)";
    }
    if (email.value.match(mailformat)) {
        email.style.backgroundColor = "rgb(214, 243, 168)";
    }
    else{
        email.style.backgroundColor = "rgb(236, 163, 163)";
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
let email = document.getElementById("email").value;
 
*/
