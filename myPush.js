// PUSH //
Array.prototype.myPush = function(callbackFN) {
    this[this.length] = callbackFN;
};

// TEST //
const myArray = [1,2,3,4,5];

// MY PUSH //
console.log("MY PUSH");
myArray.myPush(6);
console.log(myArray);

// REMOVE MY PUSH APPEND //
myArray.pop(6);

// PUSH //
console.log("PUSH");
myArray.push(6);
console.log(myArray);