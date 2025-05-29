function solve(text) {
    regex = /(\#[a-zA-Z]+)\b/gm;
    specialWords = text.match(regex);
    result = specialWords.map((w) => w.substring(1, w.length));
    console.log(result.join('\n'));
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign');
solve('Nowadays everyone uses # to tag a#special word in #socialMedia');