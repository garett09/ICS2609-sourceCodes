function login (){
    let user = document.getElementById("user").value;
    let pwd = document.getElementById("pwd").value;
    if(user === "eduardonacion" && pwd === "okie"){
        alert("Sign In Succesful")
    }else{
        alert("Failed Sign In")
    }
}
function changeColor(){
    this.document.getElementById("outer").style.backgroundColor= "red";
}

function inputData(){
    let textbox = document.getElementsByClassName("input");
    textbox[0].value = "eduardonacion";
    textbox[1].value = "okie";
}
function displayData(){
    alert(document.getElementById("fruit").value);
}




// EXAMPLES
// VAR
/*var can be reassigned (example)
var temp = 5;
var temp = "dog";
console.log(temp);
*/

/* var function (example)
var temp = 5;
var temp = "dog";

function m1(){
    temp = true;
    console.log(temp);
}
m1();
*/ 
//LET
/* let can not be re declare but can be reassigned 
a variable in a function can not be seen in a global scope(example)
let temp = 5;
temp = "dog";

function m1(){
    let temp2 = true;
    console.log(temp);
}
console.log(temp2);
*/
// CONS
// can not be redeclare and can not be reassigned
/*
const temp = 5;
temp = "dog";

function m1(){
    const temp2 = true;
    console.log(temp);
}
console.log(temp2);





