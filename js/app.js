// Default Parameters

function Student(name, lastName, school = "ULCA") {
    this.name = name;
    this.lastName = lastName;
    this.school = school;
}

const john = new Student('john', 'sanders', 'UCLA');
const bob = new Student('bob', 'jordan');
const susy = new Student('susy', 'jordan', 'stanford');


console.log(john);
console.log(bob);
console.log(susy);
