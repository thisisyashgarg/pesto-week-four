// function C () {
//     this.a = 37;
// }

// console.log(C());
// console.log(new C());

// function C2 () {
//     this.a = 37;
//     return { a: 38}
// }

// o = new C2();
// console.log(o); // overriding



function Person (name, age){
    this.name = name;
    this.age = age;
    // return {};  // only object can override 
}

Person.prototype.printName = function(){
    console.log(this.name.toUpperCase());
}
const p1 = new Person('a', 23);
const p2 = new Person('b', 21);

// console.log(Object.getPrototypeOf(p1) === Person.prototype);
//tis confirms the diagram correctly

p1.printName();
p2.printName();


// console.log(new Person('yash', 21));

                         // Weird Behaviour Without new keyword 


// function example (fullName, age) {
//     //use this
//     if(!new.target){
//         throw new Error('should use new')
//     }
//     //or we can use strict
//     'use strict';

//     //or 
//     if(!this instanceof Parent){
//         throw new Error('should use new')
//     }


//     this.fullName = fullName ;
//     this.age = age;
// }    
// console.log(example('Delhi', 21)); // it logs undefined

//we solve this by adding an error prompt in function


// creating objects using es6 classes
class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const p3 = new People('yash', 21);

console.log(p3)





