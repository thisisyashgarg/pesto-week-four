// const parent = { name: 'Yash'};
// const obj = Object.create(parent);


//these are properties of parent which is prototype
// console.log(obj['toString']);  //toString in obj overrides tostring in parent 
// console.log(obj.hasOwnProperty);
// console.log(obj.hasOwnProperty('toString'));
// console.log(obj.toString());

//adding a property doesnt change anything in parent object / prototype
// console.log(obj.toString);
// obj.toString = null;
// console.log(obj);

//Accessing the prototype
// console.log(Object.getPrototypeOf(obj));
// console.log(Reflect.getPrototypeOf(obj));
// console.log(Reflect.getPrototypeOf(obj) === parent);
// console.log(parent.isPrototypeOf(obj));
// console.log(obj.__proto__);

//modifying prototypes
const child = {};
const parent = { 
    name: 'YKG',
    getName () {
        return this.name;
    }
};

//make parent object, the prototype of child object
// Object.setPrototypeOf(child, parent);
// console.log(child.getName());

//if we want to delete the prototype of child, we can assign its prototype to null
// Object.setPrototypeOf(child, null);
// console.log(child.name);


                //Creating objects with their prototypes

const proto = {
    describe: function (){
        return 'name:' + this.name;
    } 
}

//creating an object obj with parent proto
const obj = Object.create(proto);
obj.name = 'Yash';

console.log(obj.describe());








