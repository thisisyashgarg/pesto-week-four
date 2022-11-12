const p1 = new Promise(function (resolve, reject) {
    resolve(10);
});  // fulfilled state

const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(10), 1000);
}); // pending state

const p3 = new Promise(function (resolve, reject) {
    reject(new Error('promise rejected'));
});  // rejected state


console.log(p2);
console.log(p1);
console.log(p3);