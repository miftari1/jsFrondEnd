function check_leap_year(year) {
    if ((year % 4 == 0 && year % 100 != 0)
        || year % 400 == 0 ) {
            console.log('yes')
        }
    else {
        console.log('no')
    }
}

check_leap_year(2003)