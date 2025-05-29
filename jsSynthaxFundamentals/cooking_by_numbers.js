function solve(num, op1, op2, op3, op4, op5) {
    for (let i = 1; i <= 5; i++) {
        let action = arguments[i];

        if (action == 'chop') {
            num /= 2;
        }
        else if (action == 'dice') {
            num = Math.sqrt(num);
        }
        else if (action == 'spice') {
            num += 1;
        }
        else if (action == 'bake') {
            num *= 3;
        }
        else if (action == 'fillet') {
            num *= 0.8;
        }
        console.log(num);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');