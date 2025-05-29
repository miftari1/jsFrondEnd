function check_digits_similarity(num) {
    asString = String(num);
    sum_digits = 0;
    counter = 1;

    for(let i = 0; i < asString.length; i++) {
        if (i != 0 && asString[i] == asString[i-1]) {
            counter += 1;
        }
        sum_digits += Number(asString[i]);
    }
    if (counter == asString.length) {
        console.log('true');
    }
    else {
        console.log('false');
    }
    return sum_digits;
}

console.log(check_digits_similarity(1234))