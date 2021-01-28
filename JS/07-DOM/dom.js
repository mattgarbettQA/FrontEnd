'use strict';
const MONKEY = document.querySelector("#cutie");
let divs = document.querySelector(".addToMe");
let allP = document.querySelectorAll("div.addToMe p");


console.dir(MONKEY);
MONKEY.title = "Cheeky Monkey";
// use SetAttribute() where possible instead of directly accessing the object
MONKEY.setAttribute("width", "500px");
MONKEY.setAttribute("class", "justtoshow");

console.log(allP);
for (let each of allP) {
    each.style.backgroundColor = "#ff0000";
}

// create new content 
let newHeading = document.createElement("h1"); // <h1> </h1>
let theText = document.createTextNode("We love JS!"); // we love JS
newHeading.appendChild(theText); // <h1> we love js </h1>

divs.appendChild(newHeading);

let newImage = document.createElement("img");
newImage.setAttribute("src", "../../Resources/pretty.jpg");
divs.appendChild(newImage);