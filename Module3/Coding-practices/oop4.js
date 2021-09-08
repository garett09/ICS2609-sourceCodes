class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }

    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }

    greet(){
        console.log(`Welcome ${this.getName()} you are my crush. Yiee`)
    }
}

class ISStudent extends Student {
    constructor(name, section, psubject) {
        super(name, section);
        this.psubject = psubject;
    }
    getPsubject() {
        return this.psubject;
    }

    greet(){
        console.log(`Welcome ${this.getName()} you are my ultimate crush. Yiee`)
    }
}

let p1 = new Student()
p1.setName("Adrian Garett Sian")
p1.setAge(21);

let p2 = new Student("Eduardo Nacion", 18);
console.log(`The student is ${p1.getName()} and his age is ${p1.getAge()}`)

console.log(`The student is ${p2.getName()} and his age is ${p2.getAge()}`)

let p3 = new ISStudent("Annie Icban", 18, "ICS2609")
console.log(`${p3.getName()} is taking ${p3.getPsubject()}`)

p3=p2;
p3.greet();