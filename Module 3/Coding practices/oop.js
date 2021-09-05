let covidCases = {
    totalCases: 201092323,
    totalRecovered: 19003423,
    totalDeaths: 3520
};

//factory function of covid cases

function covidStats(cases, recovered, deaths) {
    let covid = {};
    covid.cases = cases;
    covid.recovered = recovered;
    covid.deaths = deaths;
    return covid;
}


let covidPHL2 = covidStats(6545, 344333, 2323);


//constructor functions

function covidTest2(totalCases, totalRecovered, totalDeaths) {
    this.totalCases = totalCases;
    this.totalRecovered = totalRecovered;
    this.totalDeaths = totalDeaths;
}

let covidPHL3 = new covidTest2(12323, 123123123, 123123123) //this is necessary else it wont initalize a new object thus it is not usable.

//class constructor

class phlStatsbro {
    constructor(totalCases, totalDeaths, totalRecovered) {
        this.totalCases = totalCases;
        this.totalDeaths = totalDeaths;
        this.totalRecovered = totalRecovered;
    }
}

let covidPHL4 = new phlStatsbro(123123, 21312312, 123123);

let covidPHL5 = new function (){
    this.totalCases = 170000;
    this.totalRecovered = 2392332;
    this.totalDeaths = 4234234;
}


console.log(covidPHL2);
console.log(covidCases);
console.log(covidPHL3);
console.log(covidPHL4);
console.log(covidPHL5)