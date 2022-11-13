let obj = {  //Iterable
    [Symbol.iterator](){
        let i = 0;
        return{ 
            next(){ //Iterator
                return { value : i++, done : i > 10};
            }
        }
    }
}

//THIS IS A ITERATOR AS WELL AS ITERABLE
let obj2 = {  
    _i : 0,
    [Symbol.iterator](){
        return this;
    }, 
    next(){ 
        return { value : this._i++, done : this._i > 10};
    }, 
    return(){
        console.log('abrupt completion');
        return { done : true};
    }
}



// for (const iter of obj2) {
//     console.log(iter);
// }


//Breaks continues without restarting the loop
for (const iter of obj2) {
    console.log(iter);
    if(iter > 5){
        break;
    }
}

// console.log('after break')

// for (const iter of obj2) {
//     console.log(iter);
// }

