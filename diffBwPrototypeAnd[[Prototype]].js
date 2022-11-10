function Person (name, age){
    this.name = name;
    this.age = age;
}

const p = new Person('a', 23);
const p2 = new Person('b', 21);


console.log(Object.getPrototypeOf(p) === Person.prototype);
console.log(Object.getPrototypeOf(Person) === Function.prototype);
console.log(Object.getPrototypeOf(p) === Person.prototype);
console.log(Object.getPrototypeOf(p) === Person.prototype);
console.log(Object.getPrototypeOf(p) === Person.prototype);