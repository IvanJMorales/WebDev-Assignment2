// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        callbackFn(this[i], i, this);
    }
};

// TEST //
// Test myEach against the native forEach
let myArray = [1,2,3,4,5]; // Array called by function

// Test with 1 parameter: element
console.log("myEach (1 parameter): element");
myArray.myEach(x => console.log(x));
console.log("myEach (1 parameter): element");
myArray.forEach(x => console.log(x));

// Test with 2 parameters: element, index
console.log("myEach (2 parameters): element, index");
myArray.myEach((x,i) => console.log(x,i));
console.log("forEach (2 parameters): element, index");
myArray.forEach((x,i) => console.log(x,i));

// Test with 3 parameters: element, index, array
console.log("myEach (3 parameters): element, index, array");
myArray.myEach((x,i,myArray) => console.log(x,i,myArray));
console.log("forEach (3 parameters): element, index, array");
myArray.forEach((x,i,myArray) => console.log(x,i,myArray));