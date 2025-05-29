/**
 * 
 * @param {Array} inputArray 
 * @param {Number} step 
 */

function solve(inputArray, step) {
    let newArray = []
    let currentElement = '';

    for (let i=0; i < inputArray.length; i+=step) {
        currentElement = inputArray[i];
        newArray.push(currentElement);
    }
    return newArray;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));
console.log(solve(['dsa', 'asd', 'test', 'tset'], 2));
console.log(solve(['1', '2', '3', '4', '5'], 6));