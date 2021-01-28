
'use strict';

const greeting = (fname) => {
    // create a popup which prints out the entered name
    alert(`Hello ${fname}`);
}

// greeting("charlie");

const writesomething = (cb) => {
    // create a user input box that takes a value and assigns it to fname^
    let username = prompt("Please enter your name: ");
    cb(username); // greeting("sav");
}

writesomething(greeting);
// anonymous function = function without a name
// userInput((fname) => alert(`Hello ${fname}`));