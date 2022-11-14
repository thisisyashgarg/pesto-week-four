// ONE WAY
class Person{
    teach (subject, teacher){
        console.log(`${teacher} is now teaching ${subject}`); 
    }
}
const Teacher = new Person();
Teacher.teach('Maths', 'Arun Sir');


//ANOTHER WAY
const Person2 = {
    teach : function  teach (subject, teacher){
        console.log(`${teacher} is now teaching ${subject}`); 
    }
}
const Teacher2 = {};
Object.setPrototypeOf(Teacher2, Person2);

Teacher2.teach('Maths', 'Arun Sir');
