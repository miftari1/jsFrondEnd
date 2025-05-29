function checkMultiplicationResult(...nums) {
    let asString = nums.join();
    let regex = /-/g;

    matches = asString.match(regex);

    if (!matches || matches.length % 2 == 0) {
        return 'Positive';
    }
    else {
        return 'Negative';
    }
}

console.log(checkMultiplicationResult(5, 12, -15));
console.log(checkMultiplicationResult(-6, -12, 14));  
console.log(checkMultiplicationResult(6, 12, 14));  