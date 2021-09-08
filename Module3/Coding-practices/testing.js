let android9 = {name :"Pie", api: 28};
let android8 = {name: "oreo", api: 27}

function displayInfo(date){
    console.log(`${this.name} was released on ${date}`)
}
displayInfo.apply(this, [android8, "august"]);