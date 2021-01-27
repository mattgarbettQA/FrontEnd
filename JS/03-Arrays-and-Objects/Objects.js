'use strict';

// container relevant information, properties (key value pairs)

// creating objects
let student = new Object();

let person = {}; // <-- short hand 

// adding properties to your object
person.name = "Tony Stark";
person["date of birth"] = 1965;

console.log(person);
console.log(person.name); //tony stark
console.log(person["date of birth"]);

let blue = {};
blue["make"] = "hyundai";
blue["model"] = "i30";
blue["colour"] = "gorgeous";

console.log(blue); // {make: "hyundai", model:"i30", color:"gorgeous"}

for (let attributes in blue) {
    console.log(`key:${attributes} value: ${blue[attributes]}`);
}

let carpark = [
    blue,
    { "make": "Audi", "model": "A5", "colour": "Silver" },
    { "make": "Merc", "model": "C", "color": "grey" }
]

console.log(carpark);

for (let cp of carpark) {
    console.log(cp);
    for (let car in cp) {
        // console.log(car); // returns the keys of the object
        // console.log(cp[car]); // returns the value
        console.log(`key: ${car} value: ${cp[car]}`); // key:[key] value:[value]
    }
}

// JSON = javascript object notation 
// key : value , key2: value2, 

let myJSONObject = {
    "tescos": [
        { "productname": "7up", "price": 0.99, "quantity": 100 },
        { "productname": "flowers", "price": 15.99, "quantity": 200 }
    ],
    "cars": [
        { "make": "Audi", "model": "A5", "colour": "Silver" },
        { "make": "Merc", "model": "C", "color": "grey" }
    ]
}

let toAdd = { "productname": "nail polish remover", "price": 3.99, "quantity": 9 };

myJSONObject.tescos.push(toAdd);

console.log(myJSONObject);

console.log(blue);
let blueToText = JSON.stringify(blue);
console.log(typeof blue);
console.log(typeof blueToText);
console.log(blueToText);

let userData = `{"name":"sav"}`;
console.log(typeof userData);
let obj = JSON.parse(userData);
console.log(obj);
console.log(typeof obj);