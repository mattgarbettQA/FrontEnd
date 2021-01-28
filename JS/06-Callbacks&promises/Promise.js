'use strict';
// Commitment, something you said you were gonna do 
// break, keep, forget

/* "promise is a placeholder for some data,
that is either available immediately, sometime in the future, 
or possibly not at all".
*/

// const functionname = () => {} (named function)
// () => {} (annonymous function)


// let promprom = new Promise((resolve,reject)=>{
//     //do something where i request information 
//     // compute something
//     let a = 1+1; 
//     if( a == 122){
//         // successful outcome
//         resolve("Oh great it all went well!");
//     }
//     else{
//         // something went wrong
//         reject("It didn't work");
//     }
// });

// .then() (if successful what should i do)
// .catch()  ( if failed/rejected what should i do )
// promprom.then( (message) => {
//     alert(`Woohoo let's throw a partyy ${message}`);
// }).catch( (error) => {
//     alert(`oh no something happened: ${error}`);
// });

// order of execution 
// promprom.then( (message) => {
//     console.log(`This is in the then block, the status is: ${message}`);
// }).catch( (err) => {
//     console.error(`This is in the catch block, the status is: ${err}`)
// }).then( () => {
//     console.log(`Do i execute?`);
// })

// let newPromise = new Promise((resolve, reject) => {
//     // complicated logic
//     console.log(`initial`);
//     resolve();
//     reject(); // unreachable code
// }).then(() => {
//     console.log(`Do this`);
// }).then(() => {
//     // throw new Error("Something has failed");
//     console.log(`Straight after`);
// }).catch(() => {
//     console.erorr(`oh no`);
// });

// initial, do this, straight after

// initial, do this, oh no 

let promising = new Promise((resolve, reject) => {
    let a = 3 * 3;
    if (a = 9) {
        resolve("Fantastic you can do maths")
    }
    else {
        reject("go back to school")
    }
});

promising.then((message) => {
    console.log(`this is in the then block, the status is: ${message}`);
}).catch((error) => {
    console.log(``)
});