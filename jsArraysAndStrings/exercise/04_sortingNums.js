/**
 * 
 * @param {[Number]} numsArray 
 */

function solve(numsArray) {
    let result = [];
    numsArray.sort((a, b) => a - b);

    while (numsArray.length) {
        if (result.length % 2 == 0) {
            result.push(numsArray.shift());
        }
        else {
            result.push(numsArray.pop());
        }
    }
   return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 12]));