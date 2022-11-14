const divisbleBy5 = new Promise();

function randomNumber(){
    console.log(Math.random());
}

function Promise (resolve, reject){
    if(randomNumber() % 5 == 0){
        reject("Promise Rejected");
    }
    resolve("Promise Fulfuilled");
}