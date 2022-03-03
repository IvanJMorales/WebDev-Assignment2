// INCLUDES //
Array.prototype.myIncludes = function(callbackFn) {
    for(let i = 0; i < this.length; i++) {
        if (this[i] === callbackFn) {
            return true;
        }
    }
    return false;
};

// TEST //
const myArray = [1,2,3,4,5];

// MY INCLUDES //
console.log("MY INCLUDES");
console.log(myArray.myIncludes(2));

// INCLUDES //
console.log("INCLUDES");
console.log(myArray.includes(2));