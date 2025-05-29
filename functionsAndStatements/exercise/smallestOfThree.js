function findSmallestNum(num1, num2, num3) {
    // let smallest = 0;

    // if(num1 < num2 && num1 < num3) {
    //     smallest = num1;
    // }
    // else if (num2 < num1 && num2 < num3) {
    //     smallest = num2;
    // }
    // else if (num3 < num1 && num3 < num2) {
    //     smallest = num3;
    // }
    // else {
    //     return num1;
    // }

    // return smallest;

    return Math.min(num1, num2, num3);
}

console.log(findSmallestNum(2, 5, 3));
console.log(findSmallestNum(600, 342, 123));
console.log(findSmallestNum(25, 21, 4));
console.log(findSmallestNum(2, 2, 2));