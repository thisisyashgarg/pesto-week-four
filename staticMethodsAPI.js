                   //PROMISE.RESOLVE         
               
// Promise.resolve([1,2,3])
// .then((x) => console.log(x))


// let value = [1, 2, 3];
// const p = Promise.resolve(value)
// .then((x) => console.log(x))

// console.log(Promise.resolve(value) === value)
// // this is false because value is not a promise


// let value2 = Promise.resolve([1, 2, 3]);
// const p2 = Promise.resolve(value2)
// .then((x) => console.log(x))

// console.log(Promise.resolve(value2) === value2);
// this is true because value2 itself is a promise

              //THENABLE OBJECT

// const obj = {
//     then(){

//     }
// }   

// Promise.resolve({ xyz (){}}).then(console.log);

// Promise.resolve(obj).then(console.log); 
// // this is not called because obj gets converted to a promise and 
// // promise must be defined to settle it

// const obj2 = {
//     then(resolve, reject){
//          resolve('done sir');
//     }
// }  

// Promise.resolve(obj2).then(console.log); 

 
                   //PROMISE.REJECT
                   
Promise.reject(new Error('fail')) 
.then(
    function (){

    },
    function (error){
         console.error('this is called')
    }
)                  




