// KEYS //
Object.myKeys = function(callbackFN) {
    let array = [];
    for (const key in callbackFN) {
        array.push(key);
    }
    return array;
};

// TEST //
const object1 = {
    a: "Hello",
    b: 42,
    c: false
};

// MY KEYS //
console.log("MY KEYS");
console.log(Object.myKeys(object1));

// KEYS //
console.log("KEYS");
console.log(Object.keys(object1));