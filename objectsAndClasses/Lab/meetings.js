function solve(appointments) {
    let schedule = {};

    for (let appointment of appointments) {
        [day, personName] = appointment.split(' ');

        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        }
        else {
            schedule[day] = personName;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let day in schedule) {
        console.log(`${day} -> ${schedule[day]}`);
    }
}

solve([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim', 
    'Friday Tim'
]);

solve([
    'Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
]);