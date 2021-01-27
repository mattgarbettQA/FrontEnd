'use strict';

// Array = List of items/values, index, collection of objects, stores information 
// Stores same values, arraylists, fixed size, immutable, 

// 4 different ways to create an array in JS
let array = Array();
let arrayWithSize = Array(10);
let arrayWithValues = Array("Tom", "Dick", "Harry");
let shortHand = [1, 2, 3]; // <---- use this convention when creating arrays

// Arrays in JS can be accessed at anytime in any index = if it doesn't contain a value it will return 
// UNDEFINED

// Arrays can be sparsley filled, any unassigned part of an array are UNDEFINED

let classroom = [];
classroom[0] = "Sav";

console.log(classroom);
console.log(classroom[2]);// undefined, 

classroom[2] = "Vinesh"; // 
console.log(classroom); //[sav, undefined, vinesh]

classroom[1] = { fname: "someone", grade: 12, year: 2022 };
classroom[3] = { fname: "someone else", grade: 12, year: 2022, subjects: ["maths", "english", "science"] }

console.log(classroom); // 

// Arrays can be resized at any time!
let students = Array(10);
students[11] = "hello";
console.log(students.length);

// methods!
let fruits = ["Banana", "Strawberry", "Melon"];
console.log(fruits);

// push() = adds to the END of an array 
fruits.push("Pear");
console.log(fruits);

// pop () = Removes from the END of an array 
fruits.pop();
console.log(fruits);

// unshift() = adds to the START of an rray 
fruits.unshift("pear");
console.log(fruits);

// shift() = remove from the start
fruits.shift();
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

console.log(fruits);