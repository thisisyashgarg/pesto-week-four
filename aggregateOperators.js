                 //PROMISE.ALL

function sleep (ms, val){
    return new Promise((resolve) => {
        setTimeout(() => resolve(val), ms)
    });
}

// console.time();
// Promise.all([sleep(3000, 'a'),sleep(2000, 'b'), sleep(4000, 'c')])
// .then(() => console.timeEnd())
// //all promises start at once and if anyone is reject it catches error

// console.time();
// Promise.all([sleep(3000, 'a'),Promise.reject('reject'), sleep(4000, 'c')])
// .then(() => console.timeEnd())
// .catch(console.log)



//if js is single threaded, how all promises start at once?



                 //PROMISE.RACE

// Promise.race([sleep(3000, 'a'),sleep(2000, 'b'), Promise.reject('reject'), sleep(4000, 'c')])
// .then(console.log)
// .catch(() => console.log('error'))
//here the promise which gets settled first prints or rejected gets logged


                 //PROMISE.any


const pErr = new Promise((resolve,reject) => {
    reject('Always reject');
})                 
Promise.any([pErr, pErr, sleep(200, 'yash')])    
.then(console.log)  
.catch((err) => console.log(err.errors))     

// gives first fullfilled value or all rejections


