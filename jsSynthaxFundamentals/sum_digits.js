function solve(num) {
    let sum_digits = 0;
    num = Math.abs(num)
    let digits = String(num);

    for(let digit of digits) {
        sum_digits += Number(digit);
    }

    return sum_digits;
}

console.log(solve(245678))