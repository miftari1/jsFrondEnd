function solve(word, text) {
    let wordLower = word.toLowerCase();
    let textLower = text.toLowerCase();

    let regex = new RegExp(`\\b${wordLower}\\b`, 'g');

    if (textLower.match(regex)) {
        console.log(word);
    }
    else {
        console.log(`${word} not found!`);
    }
}

solve('javascript', 'JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');
solve('python', 'python');
solve('i', 'JavaScript is the best programming language');