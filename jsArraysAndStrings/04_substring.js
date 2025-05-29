/**
 * 
 * @param {String} inputStr 
 * @param {Number} startIndex 
 * @param {Number} endIndex 
 */


function solve(inputStr, startIndex, count) {
    let result = inputStr.substring(startIndex, startIndex + count);
    console.log(result);
}

solve('ASentence', 1, 8);
solve('SkipWord', 4, 7);
solve('Mechanic', 2, 4)