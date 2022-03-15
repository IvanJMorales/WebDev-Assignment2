// SOME //
Array.prototype.mySome = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i])) {
            return true;
        }
    }
    return false;
};


// TEST //
let myArray = [1,2,3,4,5];

let even = (element) => element % 2 === 0;
console.log("SOME");
console.log(myArray.some(even));
console.log("mySOME");
console.log(myArray.mySome(even));