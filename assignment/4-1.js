const promise = new Promise((resolve, reject) => {

  const random = parseInt(Math.random() * 100)
  if(random % 5 == 0){
     resolve(random);
  }
   reject(random);

//    const random = Math.random();
//    if(random % 5 == 0){ // this gives remainder in decimal places that is why it gets rejected
//       resolve(random);
//    }
//    reject(random);

});

promise
.then((val) => console.log(`${val} is divisible by 5`))
.catch((val) => console.log(`${val} is not divisible by 5`))

 
