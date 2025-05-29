function factorialDivision(firstNum, secondNum) {
    let result = 1;

    if (firstNum > secondNum) {
        for (let i = firstNum; i > secondNum; i--) {
            result *= i;
        }
    }
    else {
        for (let i = secondNum; i > firstNum; i--) {
            result /= i;
        }
    }

    return result.toFixed(2);
}

console.log(factorialDivision(5, 2));