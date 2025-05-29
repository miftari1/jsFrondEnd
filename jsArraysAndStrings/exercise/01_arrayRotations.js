/**
 * 
 * @param {Array} inputArray 
 * @param {Number} times 
 */

function solve(inputArray, times) {
    for (let i=0; i < times; i++) {
        let firstElement = 0;

        firstElement = inputArray.shift();
        inputArray.push(firstElement);
    }
    console.log(inputArray.join(' '));
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);