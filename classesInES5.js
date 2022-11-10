function Person(name){
    this.name = name;
}

Person.prototype.printName = function(){
    console.log(this.name);
}

function Employee(name, id){
    Person.call(this, name); //super call ()
    //id gets stored here only, but name gets transfered to Person function
    this.id = id;
}

Object.setPrototypeOf(Employee.prototype, Person.prototype);
//we are introducing Person.prototype in the chain to make it the parent of Employee.prototype

Employee.prototype.printId = function(){
    console.log(this.id);
}

const e = new Employee('yash', 21); //this calls the employee func with name and age
e.printId(); //this gets printed because printId is in Employee.prototype which is parent of e
console.log(e); // this object has both name and id
e.printName();