function solve(inputArray) {
    let sumOddNums = 0;
    let sumEvenNums = 0;
    let difference = 0;

    for (let n of inputArray) {
        if (n % 2 == 0) {
            sumEvenNums += n;
        }
        else {
            sumOddNums += n;
        }
    }
    difference = sumEvenNums - sumOddNums;
    console.log(difference);
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);