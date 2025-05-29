function solve(num1, num2) {
    let numbers_string = '';
    let sum_numbers = 0;

    for (let i=num1; i <= num2; i++) {
        numbers_string += `${i} `;
        sum_numbers += Number(i);
    }
    console.log(numbers_string);
    console.log(`Sum: ${sum_numbers}`);
}

solve(0, 26)