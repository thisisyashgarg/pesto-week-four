function fib(n){
    if(n<2){
      return n;
    };
    return fib(n-1)+fib(n-2);
}
let n = 9;
let ansArray = [];
for (let i = 0; i <= n; i++) {
    ansArray[i] = fib(i);
}

const iter = ansArray[Symbol.iterator]();
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());