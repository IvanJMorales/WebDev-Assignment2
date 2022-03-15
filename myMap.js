// MAP //
Array.prototype.myMap = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        callbackFn(this[i], i, this);
    }
};

// Test
let myArray = [1,2,3,4,5]; // Array called by function

// Test with 1 parameter: element
console.log("myMap (1 parameter): element");
myArray.myMap((x) => console.log(x));
console.log("Map (1 parameter): element");
myArray.map(x => console.log(x));

// Test with 2 parameters: element, index
console.log("myMap (2 parameter): element, index");
myArray.myMap((x,i) => console.log(x,i));
console.log("Map (2 parameter): element, index");
myArray.map((x,i) => console.log(x,i));

// Test with 3 parameters: element, index, myArray
console.log("myMap (3 parameter): element, index, array");
myArray.myMap((x,i,myArray) => console.log(x,i,myArray));
console.log("Map (3 parameter): element, index, array");
myArray.map((x,i,myArray) => console.log(x,i,myArray));