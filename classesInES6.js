class Person {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}

class Employee extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    printId() {
        console.log(this.id);
    }
}

const e = new Employee('yash', 21); 
e.printId(); 
e.printName();
console.log(e);

function yash(){

}
