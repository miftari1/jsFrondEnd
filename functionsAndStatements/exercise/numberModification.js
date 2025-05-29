function solve(inputNumber) {
    let asArray = String(inputNumber).split('').map(n => Number(n));

    while(true) {
        let sumDigits = 0;
        let averageValue = 0;

        asArray.forEach(num => {sumDigits += num});
        averageValue = sumDigits / asArray.length;

        if (averageValue > 5) {
            return asArray.join('');
        }
        else {
            asArray.push(9);
        }
    }
}

console.log(solve(101));
console.log(solve(5835));