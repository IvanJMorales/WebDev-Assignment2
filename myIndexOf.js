// INDEXOF //
Array.prototype.myIndexOf = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === callbackFn) {
            return i;
        }
    }
    return -1;
};

// TEST // 
const myArray = [1,2,3,4,5];

// MY INDEX OF //
console.log("MY INDEX OF");
console.log(myArray.myIndexOf(1));

// INDEX OF //
console.log("INDEX OF");
console.log(myArray.indexOf(1));
