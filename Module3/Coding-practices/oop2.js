function Student(name, course, section) {
    this.name = name;
    this.course = course;
    this.section = section;
    this.display = function () {
        console.log(`${this.name} :: ${this.course} :: ${this.section}`)
    }
}
//this displays code for every studetn object but only uses a prototype to print everything. 
Student.prototype.display = function () {
    console.log(`${this.name} :: ${this.course} :: ${this.section}`)
}

let s1 = new Student("Kobe Bryant", "BSKOBE", "3KB")
let s2 = new Student("Lebron James", "BSJAMES", "3LBJ")
let s3 = new Student("Michael Jordan", "BSMJ", "3MJ")

//this is an inefficient way of printing all the displays of the object. that is why we use a prototype just to display all the objects in one function.
s1.display();
s2.display();
s3.display();