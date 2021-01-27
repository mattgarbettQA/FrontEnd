'use strict';

// data types 
// String, number, boolean, null, undefined, and object

let myString = `hello`;
let myNumber = 20;
let myBool = true;
let myObj = { name: "Savannah", key: "value", year: 2021, classroom: [] };

console.log(myObj);

let bool1 = true; // 1
let bool2 = false; // 0

// Check if bool1 == bool2 
// EQUALITY
// == ONLY checks the value
console.log(bool1 == bool2); //false
console.log(1 == true); // true

// STRICT EQUALITY
// === checks the VALUE AND THE TYPE!
console.log(1 === true); // false
console.log(myNumber === 1); // 20 === 1 (false)

let myAge = null; // null
let mydob;  // undefined

console.log(myAge == mydob); // true,
console.log(myAge === mydob); // false

console.log("" === 0);

// inequality 
let sav = "savannah";

console.log(typeof sav);
console.log(typeof true);

// inequality = != && !==

console.log(sav != true); // just checking value

console.log(sav !== true); // checking value & type!!!