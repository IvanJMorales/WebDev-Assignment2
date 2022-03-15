// KEYS //
Object.myValues = function(callbackFN) {
    let array = [];
    for (const value in callbackFN) {
        array.push(callbackFN[value]);
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
console.log("MY VALUES");
console.log(Object.myValues(object1));

// KEYS //
console.log("VALUES");
console.log(Object.values(object1));