let android9 = {name :"Pie", api: 28};
let android8 = {name: "oreo", api: 27}

function displayInfo(date){
    console.log(`${this.name} was released on ${date}`)
}
displayInfo.apply(this, android8, "august");

//tutorial
var obj = {num:2}

var addToThis = function (a, b, c){
    return this.num+a+b+c;
};

console.log(addToThis.call(obj,3,4,5));
//functionName.call (obj,functionarguments)