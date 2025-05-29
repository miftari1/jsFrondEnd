/**
 * 
 * @param {String} inputStr 
 * @param {String} toCount 
 */

function solve(inputStr, toCount) {
    regex = new RegExp(`\\b${toCount}\\b`, 'g');
    matches = inputStr.match(regex);
    if (matches) {
        console.log(matches.length);
    }
    else {
        console.log(0);
    }
    
}

solve('This is a word and it also is a sentence', 'is');
solve('is great place for learning new programming languages', 'softuni');