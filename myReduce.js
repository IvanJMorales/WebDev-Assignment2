// REDUCE //
Array.prototype.myReduce = function() {
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            const combine = this[i] + this[j];
        }
    }
};

// TEST //
const myArray = [1,2,3,4,5];

const sum = myArray.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log("MY REDUCE");
console.log(sum);

const sumWithInitial = myArray.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log("REDUCE");
console.log(sumWithInitial);
