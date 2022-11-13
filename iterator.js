const emojis = 'a😂🤩🥺🙃😎t';

const iter = emojis[Symbol.iterator]();
console.log(iter);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());