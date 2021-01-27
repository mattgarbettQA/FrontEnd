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


// for ( [initialexpress]; [conditon]; iteration){
//     statement
// }

for (let i = 0; i <= 3; i++) {
    console.log(i);
};

// do while & while 

// do while => will always run ATLEAST once before a checking a condition
let canirun = false;
do {
    console.log(`I run atleast once!`)
} while (canirun);

// while => checks the condition first, if :( then it wont run!

let pups = 0;
let enough = false;

while (enough) {
    console.log(`Look a puppyyy!`);
    pups++;

    if (pups > 5) {
        enough = false;
    }
}

// switch case = (evaluates an expression, then finds matching case)

let now = new Date();

switch (now.getDay()) {
    case 0:
        console.log(`sunday`);
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`It's a weekday`);
        break;
    case 6:
        console.log(`It's saturday`);
    default:
        console.log(`Don't know the day...`);
        break;
}

let greeting = `good `;

if (now.getHours() > 17) {
    greeting += `evening`;
} else {
    greeting += `day`;
}

console.log(greeting);

Syntax: (condition) ? valueIfTrue : valueIfFalse;

let greeting2 = `good ` + ((now.getHours() > 17) ? `evening` : `day`);
console.log(greeting2);