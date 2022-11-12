const delay = ms => new Promise(function (resolve, reject){
    setTimeout(() => resolve (Math.random * 1000), ms);
});

// console.time();
// delay(2000)
// .then(() => {
//     console.timeEnd();
//     return delay(3000);
// })
// .then(num => num ** 2)
// .then(num => num/2)
// .then(console.log)
// .catch((err) => console.error('error'))


//Promise stores its value in itself
// const p = delay(2000);
// p.then(console.log)
// p.then(console.log)
// p.then(console.log)
// p.then(console.log)

//Question 1
// Promise.resolve(10)
// .then((x) => console.log(x)) 
// .then((x) => console.log(x)) //return value of console.log is undefined
// .then((x) => console.log(x)) // this is chaining


//Question 2
// const p = Promise.resolve(20); //promise value is stored in p 
// p.then((x) => console.log(x)) // this is just attaching multiple handlers to same promise
// p.then((x) => console.log(x))
// p.then((x) => console.log(x))

//Question 3
// Promise.reject(10)
// .catch((x) => {
//     console.log(x);
//     return 20;
// })
// .then ((x) => {
//     console.log(x);
//     return 30;
// })
// .catch((x) => {
//     console.log(x);
//     return 40;
// })
// .then ((x) => {
//     console.log(x);
// })
