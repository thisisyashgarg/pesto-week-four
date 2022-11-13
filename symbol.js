// let sym =  Symbol('red');
// let sym2 = Symbol('blue');

// console.log(sym);
// console.log(typeof sym2);


let sym = Symbol();
let sym2 = Symbol();

let obj = {
    name : 'yash',
}

obj[sym] = 42;
console.log(Object.keys(obj));
console.log(Reflect.ownKeys(obj));
console.log(sym === sym2); //always unique



//GLOBAL SYMBOL REGISTRY
let globalSym = Symbol.for('k1'); // this symbol is registered globally now
// can be accessed anywhere 

//FINDING KEY IN GLOBAL REGISTRY
console.log(Symbol.keyFor(globalSym));

//NOT COERIVE TO A PRIMTIVE
// console.log(sym + ' '); // thows error

//WELL KNOWN SYMBOLS
class A {
    static [Symbol.hasInstance](){
        console.log('Symbol.hasInstance has been called');
        return false;
    }
};
let a = new A();
console.log( a instanceof A);





export {globalSym}; 


