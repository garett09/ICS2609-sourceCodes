let android9 = { name: "Pie", api: 28 };
let android8 = { name: "oreo", api: 27 }

function displayInfo(date) {
    console.log(`${this.name} was released on ${date}`)
}
let aug = ["August"]
displayInfo.apply(android8, aug);/* this is working. call() accepts an argumentlist while apply only 
accepts single array of arguments */

try {
    displayInfo.apply(android8, "August"); // this doesnt work.

} catch (e) {
    console.log("The command did not work.");
}

var kobe = displayInfo.bind(android8);
console.log(kobe("August"))

//tutorial
var obj = { num: 2 }
var obj2 = { num: 5 }

var addToThis = function (a, b, c) {
    return this.num + a + b + c;
};

console.log(addToThis.call(obj, 3, 4, 5));
//call

var array = [3, 4, 5];

console.log(addToThis.apply(obj, array));
//apply

var bound = addToThis.bind(obj);


console.log(bound(1, 2, 3))

