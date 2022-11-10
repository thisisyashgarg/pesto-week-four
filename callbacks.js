import * as fs from 'fs';

// console.log('start')
// setTimeout(() =>{
//     console.log('middle')
// }, 1000);
// console.log('end');


console.log('start')
fs.readFile('./callbacks.js', (err, data) => {
    console.log(`data ->
     ${data}`);
});
console.log('end')


