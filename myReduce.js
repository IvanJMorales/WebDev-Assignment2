// REDUCE //
Array.prototype.myReduce = function() {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum = sum + this[i];
    }
    return sum;
};

// TEST //
const myArray = [1,2,3,4,5];

// MY REDUCE //
const myAnswer = myArray.myReduce((previousValue, currentValue) => previousValue + currentValue);
console.log("MY REDUCE");
console.log(myAnswer);

// REDUCE //
const answer = myArray.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log("REDUCE");
console.log(answer);
