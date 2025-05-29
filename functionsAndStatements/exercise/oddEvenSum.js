function sumOddEvenDigits(num) {
    let sumEven = 0;
    let sumOdd = 0;
    let digits = String(num).split('');

    for (let digit of digits) {
        let currentDigit = Number(digit)

        if (currentDigit % 2 == 0) {
            sumEven += currentDigit;
        }
        else {
            sumOdd += currentDigit;
        }
    }
    
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
}

console.log(sumOddEvenDigits(1000435));
console.log(sumOddEvenDigits(3495892137259234));