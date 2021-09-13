function Student(name, course, section){
    this.name = name;
    this.course = course;
    this.section = section;
    /*this.display = function(){ //another way to display
        console.log(`${this.name} :: ${this.course} :: ${this.section} :: `)
    }*/
}


Student.prototype.display = function(){// another way to display
    console.log(`${this.name} :: ${this.course} :: ${this.section} :: `)

}

let s1 = new Student("eduardo nacion", "BSIS", "3ISA");
let s2 = new Student("adrian sian", "BSIT", "3ITB");

s1.display();
s2.display();