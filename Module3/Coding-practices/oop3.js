let stud = {
    name: "John Kobe",
    Quiz1: 88,
    Quiz2: 69,
};

let bonus = [14, 25];

let aveQuiz = function (bonus1, bonus2) {
    return (this.Quiz1 + this.Quiz2 + bonus1 + bonus2 / 2);
}

console.log(aveQuiz.call(stud));
console.log(aveQuiz.apply(stud, bonus));


