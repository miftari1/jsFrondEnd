function check_speed(speed, area) {
    const RESIDENTIAL = 20;
    const CITY = 50;
    const INTERSTATE = 90;
    const MOTORWAY = 130;
    let difference = 0;
    let status = '';
    let speed_limit = 0

    if (area == 'residential') {
        if (speed <= RESIDENTIAL) {
            return `Driving ${speed} km/h in a ${RESIDENTIAL} zone`;
        }
        else {
            difference = speed - RESIDENTIAL;
            speed_limit = RESIDENTIAL;
        }
    }
    else if (area == 'city') {
        if (speed <= CITY) {
            return `Driving ${speed} km/h in a ${CITY} zone`;
        }
        else {
            difference = speed - CITY;
            speed_limit = CITY;
        }
    }
    else if (area == 'interstate') {
        if (speed <= INTERSTATE) {
            return `Driving ${speed} km/h in a ${INTERSTATE} zone`;
        }
        else {
            difference = speed - INTERSTATE;
            speed_limit = INTERSTATE;
        }
    }
    else if (area == 'motorway') {
        if (speed <= MOTORWAY) {
            return `Driving ${speed} km/h in a ${MOTORWAY} zone`;
        }
        else {
            difference = speed - MOTORWAY;
            speed_limit = MOTORWAY;
        }
    }
    if (difference <= 20) {
        status = 'speeding';
    }
    else if (difference <= 40) {
        status = 'excessive speeding';
    }
    else {
        status = 'reckless driving';
    }

    return `The speed is ${difference} km/h faster than the allowed speed of ${speed_limit} - ${status}`;
}

console.log(check_speed(200, 'motorway'))