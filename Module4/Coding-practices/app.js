const calc = require("./customModule");

console.log(calc.pi);
console.log(calc.add(5, 8));
console.log(`The answer is ${calc.subtract(10, 6)}`); // nice working
console.log(calc.multiply(7, 7));
console.log(calc.divide(100, 2));
