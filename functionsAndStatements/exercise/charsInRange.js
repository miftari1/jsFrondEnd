function charsBetween(firstChar, secondChar) {
    let firstCode = firstChar.charCodeAt(0);
    let secondCode = secondChar.charCodeAt(0);
    let charsArray = [];

    for (let i = Math.min(firstCode, secondCode) + 1; i < Math.max(firstCode, secondCode); i++) {
        charsArray.push(String.fromCharCode(i));
    }

    return charsArray.join(' ');
}

console.log(charsBetween('a', 'd'));
console.log(charsBetween('#', ':'));
console.log(charsBetween('C', '#'));