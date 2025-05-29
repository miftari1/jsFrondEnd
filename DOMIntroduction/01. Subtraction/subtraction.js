function subtract() {
    let firstNum = document.getElementById('firstNumber').value;
    let secondNum = document.getElementById('secondNumber').value;
    let output = document.getElementById('result');

    let subtractionResult = Number(firstNum) - Number(secondNum);

    output.textContent = subtractionResult;
}