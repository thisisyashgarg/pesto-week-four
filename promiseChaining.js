const delay = ms => new Promise(function (resolve, reject){
    setTimeout(() => resolve (1000), ms);
});

// delay(2000)
// .then(() => console.log('after 2 seconds'));
console.time();
delay(2000)
.then(() => {
    console.timeEnd();
    return delay(3000);
})
.then(num => num ** 2)
.then(num => num/2)
.then(console.log)
.catch((err) => console.error('error'))
