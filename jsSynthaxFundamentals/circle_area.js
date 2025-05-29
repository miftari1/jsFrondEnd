function find_circle_area(circle_radius) {
    let input_type = typeof circle_radius;

    if (input_type != 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${input_type}.`);
        return;
    }
    else {
        let circle_area = Math.PI * (circle_radius ** 2);
        console.log(circle_area.toFixed(2));
    }
}

find_circle_area('name')