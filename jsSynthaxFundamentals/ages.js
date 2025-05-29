function solve(age) {
    if (age < 0) {
        console.log('out of bounds');
        return;
    }
    else {
        let result;

        if (age >= 0 && age <= 2) {
            result = 'baby';
        }
        else if (age >= 3 && age <= 13) {
            result = 'child';
        }
        else if (age >= 14 && age <= 19) {
            result = 'teenager';
        }
        else if (age >= 20 && age <= 65) {
            result = 'adult';
        }
        else {
            result = 'elder';
        }
        console.log(result);
    }
}

solve(-1)