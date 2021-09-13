let covidPhl = {// CREATING A OBJ
    totalCases: 217000, 
    recovered: 157000, 
    deaths: 3520
};

function covidStat(totalCases, recovered, deaths){// CREATING OBJ - FACTORY FUNC
    let covid = {};
    covid.totalCases =  totalCases;
    covid.recovered = recovered;
    covid.deaths = deaths;

    return covid;
}

let covidPhl2 = covidStat(217000,157000,3520);

function Covid(totalCases,recovered,deaths){//CREATING OBJ - CONSTRUCTOR FUNC
    this.totalCases = totalCases;
    this.recovered = recovered;
    this.deaths = deaths;
}

let covidPhl3 = new Covid(217000, 157000, 3520);

class PhlStat{//CREATING OBJ -ES6 CLASS SYNTAX
    constructor(totalCases,recovered,deaths){
        this.totalCases = totalCases;
        this.recovered = recovered;
        this.deaths = deaths;
    }
}
let covidPhl4 = new PhlStat(217000, 157000, 3520);

let covidPhl5 = new function(){//CREATING OBJ - SINGLETON PATTERN
    this.totalCases = 217000;
    this.recovered = 157000;
    this.deaths = 3250;
}// cannot use the constructor function again only once


console.log(covidPhl);
console.log(covidPhl2);
console.log(covidPhl3);
console.log(covidPhl3 instanceof Covid);// to check if true
console.log(covidPhl4);
console.log(covidPhl5);
