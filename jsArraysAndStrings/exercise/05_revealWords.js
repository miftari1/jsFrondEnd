/**
 * 
 * @param {String} choices 
 * @param {String} inputString 
 */

function solve(choices, inputString) {
    let asArray = [];

    asArray = inputString.split(' ');
    choices = choices.split(', ');

    for(let c of choices) {
        for(let i = 0; i < asArray.length; i++) {
            if (asArray[i] == '*'.repeat(c.length)) {
                asArray[i] = c;
            }
        }
    }
    console.log(asArray.join(' '));
}

solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning', 'softuni is ***** place for ******** new programming languages');