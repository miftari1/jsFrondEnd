function findPerfectNumber(inputNumber) {
    let validDividersSum = 0;

    for (let currentDivider = 1; currentDivider < inputNumber; currentDivider++) {
        if (currentDivider % Number(currentDivider.toFixed(0)) == 0 && inputNumber % currentDivider == 0) {
            validDividersSum += currentDivider;
        }
    }

    if (validDividersSum == inputNumber) {
        console.log("We have a perfect number!");
    }
    else {
        console.log("It's not so perfect.")
    }

}

findPerfectNumber(6);
findPerfectNumber(28);
findPerfectNumber(1236498);