const test = () => {
    return Promise.resolve("hello");
}

test().then((message) => console.log(message));

// waiting for some information... 

const test2 = async () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done");
        }, 5000)
    });

    let result = await promise;
    console.log(result);
}

test2();


const billy = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Billy");
            resolve();
        }, 1000)
    });
}
const bob = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Bob");
            resolve();
        }, 2000)
    });
}
const joe = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Joe");
            resolve();
        }, 3000)
    });
}

const doThings = async () => {
    await joe(); // 3 seconds
    await bob();  // 2 sec
    await billy(); // 1 sec
}

doThings(); //billy,bob,joe
//joe,bob,billy