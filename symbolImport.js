import { globalSym } from "./symbol.js";

let s = Symbol();

console.log(globalSym === Symbol.for('k1')); 
