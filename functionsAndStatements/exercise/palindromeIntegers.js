function checkPalindrome(numsArray) {

    for (let num of numsArray) {
        let asString = String(num)
        let midPoint = Math.floor(asString.length / 2);

        let result = true;

        for (let i = 0; i < midPoint; i++) {
            if (asString[i] != asString[(asString.length - 1) - i]) {
                result = false;
                break;
            }
        }
        console.log(result);
    }
}

checkPalindrome([123,323,421,121]);
console.log('------')
checkPalindrome([32,2,232,1010]);