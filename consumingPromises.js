//Then
const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(10);
    }, 1000);
}); 

//then only executes once the promise is settled, it returns a promise
// p.then(
//     (val) => console.log(`value - ${val}`),
//     (val) => console.error(`error - ${val}`)
// );

p
.then((val) => console.log(`value - ${val}`)) // for fulfilled
.catch((val) => console.error(`error - ${val}`)) // for rejected
.finally((val) => console.error(`Promise Settled`)) // after settlement