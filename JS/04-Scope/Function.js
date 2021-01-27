'use strict';

add(12, 3); // hoisting the function to the top of the file

// function declaration = HOISTS
function add() {
    console.log(1 + 2);
}

function add(num1, num2) {
    console.log(num1 + num2);
}

// hello(); no allowed! 

// function expression 
const hello = function () {
    return ("do something");
}
hello();

// arrow function 
// syntax: const/let nameoffunction = () => {}

// arrow function - with no parameters
const addition = () => {
    console.log(1 + 2);
}
addition();

// arrow function with two parameters
const additionwithvals = (number1, number2) => {
    console.log(number1 + number2);
}
additionwithvals(23, 4);