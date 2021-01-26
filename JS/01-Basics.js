// 3 keywords - by default there is no such thing as 
// declaring a variable with a specific type
let a = "a"; // a value that changes
const b = "b"; // a set/fixed value
var c = "c";  // VERY BAD PLEASE DON'T USE

a = "I am the LET"; // access variable a and change to value "b";
// b = "something else"; // fixed value - ERROR!

// TO print to console: 
console.log(a);
console.info("Info");
console.warn("Warning");
console.error("Error");

// try and declare your variables as a CONST if you know it's not going to change!!
const fname = "savannah"; //String
const year = 2021;  // Int?
const value = false; // boolean
const num = 2.4; // double?

console.log(typeof fname); // string
console.log(typeof year); // number
console.log(typeof value); // boolean
console.log(typeof num); // number

// year = 2022; cannot reassign a CONST!

// undefined / null 

// null = explicitly stating that it's empty at runtime 
// undefined = isn't initialised at declaration

let age = null; // explicitly saying you're empty
let sav; // uninitialised => undefined

console.log(age);
console.log(sav);


// String interpolation / concatenation
let str = "5 + 3 = ";
let val = 5 + 3;
let str2 = str + val;
console.log(str2); // 5 + 3 = 8

// template literal
let string = `5 + 3 = ${val}`;
console.log(string); // 5 + 3 = 8

console.log(`quote:"" single: '' `); // nicer way :) 
console.log(" quote:\"\" single: '' "); // escaping characters