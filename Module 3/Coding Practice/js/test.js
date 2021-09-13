/*function createSubject(code,units){
    return {
        code: code,
        units: units
    };
}
let s1 = createSubject("ics2609", 3);

console.log(`${s1.code} is a ${s1.units}`);*/
/*
function mall (name,location){
    this.name = name;
    this.location = location;

}
mall.prototype.sell = function(product){
    console.log(`${this.name} sells ${product}`);
};
let m1 = new mall("SM","tutuban");
let info = console.log(m1.sell("dry goods"));
console.log(info);*/

class Movie {
    constructor(title, director){
        this.title = title;
        this.director = director
    }
}
let m1 = new Movie ("all the bright places","brett haley");

let m2 = function(actress){
    console.log(`${actress} star in the movie '${this.title}'.`);

};
m2.call(m1, "ella fanning");