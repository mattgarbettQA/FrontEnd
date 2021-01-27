'use strict';

// Iterator 

let x = 1;
console.log(x++); // 1 (because it hasn't iterated yet, we print first then iterate)
console.log(x); // 2

let y = 1;
console.log(++y); // 2 (we iterate first then print)
console.log(y); // 2

for (let i = 0; i <= 3;) {
    console.log(`i = ${++i}`);
}

for (let j = 0; j <= 3;) {
    console.log(`j = ${j++}`);
}


// ASI - Automatic semi colon Insertion 
// 1. Adds a ; when two lines are seperated by a enter key
// 2. When two statements are separated by a }
// 3. Line terminator followed by a BREAK, CONTINUE, RETURN / THROWS.

let greeting = "Hello friends"
console.log(greeting)

let foo
bar;

// INTERPRETED as: let foo; bar; 

console.log(foo); // foo
console.log(bar); // nothing, not been declared

let a
b
    = 3

// INTERPRETED as expected: let a, b=3; 

console.log(a); // undefined
console.log(b); // error?, 3, 

return
2 * b + 1

/* Interpreted as:
return;
2*b+1;
*/