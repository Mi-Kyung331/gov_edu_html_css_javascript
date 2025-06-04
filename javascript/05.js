/**
    javascript class
 */
class Student {
    name;
    age;

    // 생산자, constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const newStudnt1 = new Student('강미경', 25);
console.log(newStudnt1);
console.log(newStudnt1.name);
console.log(newStudnt1.age);