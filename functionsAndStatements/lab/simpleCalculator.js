function mathCalculations(num1, num2, operator) {
    let operations = {
        'multiply': num1 * num2,
        'divide': num1 / num2,
        'add': num1 + num2,
        'subtract': num1 - num2
    }
    
    return operations[operator];
}

console.log(mathCalculations(5, 5, 'multiply'));
console.log(mathCalculations(40, 8, 'divide'));
console.log(mathCalculations(12, 19, 'add'));
console.log(mathCalculations(50, 13, 'subtract'));