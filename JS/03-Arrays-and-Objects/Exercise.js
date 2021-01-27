'use strict';

let darthVader = {
    allegiance: "Empire",
    weapon: "lightsaber",
    sith: true,
    Jedi: false
};

console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.Jedi}`);


//1.
let myArray = ["hello", 'everyone'];
//2.
console.log(myArray.length);
//3.
console.log(myArray.push("goodbye"));
//4.
console.log(myArray.length);
//5.
console.log(myArray.shift());
//6.
for (let eachElement of myArray) {
    console.log(eachElement);
}