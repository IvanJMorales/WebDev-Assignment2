// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(callbackFN) {
    for (let i = this.length - 1; i >= 0; i--) {
        if (this[i] === callbackFN) {
            return i;
        }
    }
    return -1;
};

// TEST //
const myArray = [1,2,3,4,5];

// MY LAST INDEX OF //
console.log("MY LAST INDEX OF");
console.log(myArray.myLastIndexOf(2));

// LAST INDEX OF //
console.log("LAST INDEX OF");
console.log(myArray.lastIndexOf(2));