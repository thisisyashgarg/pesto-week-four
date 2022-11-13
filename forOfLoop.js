//OVER MAPS AND SETS
const map = new Map([
    [65, 'a'],
    [78, 'b'],
    [89, 'c'],
]);

for (const pair of map) {
    console.log(pair);
    const [key, value] = pair;
    console.log(key, value); //both are the 
}

//OVER STRINGS
console.log('In for of style')
const emojis = 'a😂🤩🥺🙃😎t'
for (const char of emojis) {
    console.log(char);
}


console.log('In normal c style')
for(let i = 0; i < emojis.length; i++){
    console.log(emojis[i]);
}