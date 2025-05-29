function solve(inputArray) {
    let username = inputArray.shift();

    for (let i = 0; i <= 3; i++) {
        let newString = inputArray[i].split('').reverse().join('');

        if (username == newString) {
            return `User ${username} logged in.`;
        }
        else {
            if (i == 3) {
                break;
            }
            console.log('Incorrect password. Try again.')
        }
    }
    return `User ${username} blocked!`;

}

console.log(solve(['Acer','login','go','let me in','recA']));
console.log(solve(['momo','omom']));
console.log(solve(['sunny','rainy','cloudy','sunny','not sunny']));