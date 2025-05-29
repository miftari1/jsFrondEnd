function AddAndSubtract(num1, num2, num3) {
    let sum = (x, y) => x + y;

    let finalResult = sum(num1, num2) - num3;

    return finalResult;
}

console.log(AddAndSubtract(23, 6, 10));
console.log(AddAndSubtract(1, 17, 30));
console.log(AddAndSubtract(42, 58, 100));