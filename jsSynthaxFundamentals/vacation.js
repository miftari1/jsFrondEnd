function calculate_vacation_price(people_count, group_type, day_of_the_week) {
    let ticket_price;
    let discount = 1; /No discount by default/
    let total_price;
    
    
    if (group_type == 'Students') {
        if (people_count >= 30) {
            discount = 0.85
        }
        if (day_of_the_week == 'Friday') {
            ticket_price = 8.45;
        }
        else if (day_of_the_week == 'Saturday') {
            ticket_price = 9.80;
        }
        else {
            ticket_price = 10.46;
        }
    }
    else if (group_type == 'Business') {
        if (people_count >= 100) {
            people_count -= 10;
        }
        if (day_of_the_week == 'Friday') {
            ticket_price = 10.9
        }
        else if (day_of_the_week == 'Saturday') {
            ticket_price = 15.60
        }
        else {
            ticket_price = 16
        }
    }
    else {
        if (people_count >= 10 && people_count <= 20) {
            discount = 0.95
        }
        if (day_of_the_week == 'Friday') {
            ticket_price = 15
        }
        else if (day_of_the_week == 'Saturday') {
            ticket_price = 20
        }
        else {
            ticket_price = 22.50
        }
    }
    total_price = people_count * (ticket_price * discount);
    console.log(`Total price: ${total_price.toFixed(2)}`);
}

calculate_vacation_price(40, "Regular", "Saturday")
