'use strict';

// destructuring - extracting data from objects and arrays
const animals = ["giraffe", "zebra", "horse", "lion"];
// const zebra = animals[1]; 
// const griffe = animals[0];
console.log(animals[1]);

// destructure my array:
const [giraffe, zebra, horse, lion] = animals;
console.log(zebra);

let myObject = { var1: "salt", var2: "pepper" };
let { var1, var2 } = myObject;
console.log(var1); //salt
console.log(var2); //pepper

// rename MY deconstructed object
let { var1: condament1, var2: pepper } = myObject;
console.log(condament1);
console.log(pepper);

// spread operator = collates values together and is stored in an []
const mylongArray = [1, 23, 466, 7, 8, 8456, 4, 64, 5, 234, 23, 53, 645, 756, 856, 74, 634, 52, 342, 53, 546, 74, 563, 53, 45, 345, 34, 5, 36, 35, 63, 6, 3, 45234, 5, 24, 234];
const [a, b, c, ...rest] = mylongArray;
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

const person = {
    first: "chris",
    middle: "p",
    last: "bacon",
    city: "manchester",
    phone: "07456828278",
    country: "UK",
    age: 25,
    email: "chrisp.bacon@gmail.com",
    dob: "12/12/1994",
    postcode: "M11",
    occupation: "trainer",
    gender: "female"
};

let { first, middle, last, gender = "male" } = person;
// let first = person.first; 
// let middle = person.middle; 
// let last = person.last; 
// let gender = male; 
// let gender = person.gender; //female


console.log(`Your human is called: ${first} ${middle} ${last} he is: ${gender}`);