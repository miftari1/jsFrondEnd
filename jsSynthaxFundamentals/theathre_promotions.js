function solve(day_type, age) {
    let ticket_price;

    if (age < 0 || age > 122) {
        console.log('Error!')
        return;
    }
    else if (0 <= age && age<= 18) {
        if (day_type == 'Weekday') {
            ticket_price = '12$'
        }
        else if (day_type == 'Weekend') {
            ticket_price = '15$'
        }
        else if (day_type == 'Holiday') {
            ticket_price = '5$'
        }
    }
    else if (18 <= age && age <= 64) {
        if (day_type == 'Weekday') {
            ticket_price = '18$'
        }
        else if (day_type == 'Weekend') {
            ticket_price = '20$'
        }
        else if (day_type == 'Holiday') {
            ticket_price = '12$'
        }
    }
    else {
        if (day_type == 'Weekday') {
            ticket_price = '12$'
        }
        else if (day_type == 'Weekend') {
            ticket_price = '15$'
        }
        else if (day_type == 'Holiday') {
            ticket_price = '10$'
        }
    }
    console.log(ticket_price)
}

solve('Holiday', -12)