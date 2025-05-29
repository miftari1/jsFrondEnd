/**
 * 
 * @param {String} inputStr 
 * @param {String} toReplace
 */


function solve(inputStr, toReplace) {
    let censored = inputStr.replaceAll(toReplace, '*'.repeat(toReplace.length));
    console.log(censored);
}

solve('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden');