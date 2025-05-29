function validatePassword(password) {
    let errorsCount = 0;

    function lengthValidator(inputString) {

        if (inputString.length < 6 || inputString.length > 10) {
            errorsCount += 1;

            console.log("Password must be between 6 and 10 characters");
        }
    }

    function charsValidator(inputString) {

       let regex = /[A-Za-z0-9]/g;
       let matches = inputString.match(regex);
       
       if ((matches && matches.length < inputString.length) || !matches) {
        errorsCount += 1;

        console.log("Password must consist only of letters and digits");
       }
    }

    function digitsValidator(inputString) {
        let regex = /[0-9]/g;
        let matches = inputString.match(regex);

        if (!matches || matches.length < 2) {
            errorsCount += 1;

            console.log("Password must have at least 2 digits");
        }
    }
    
    lengthValidator(password);
    charsValidator(password);
    digitsValidator(password);

    if (errorsCount == 0) {
        console.log("Password is valid")
    }

}

validatePassword('logIn');
validatePassword('MyPass123');
validatePassword('Pa$s$s');
validatePassword('222222');