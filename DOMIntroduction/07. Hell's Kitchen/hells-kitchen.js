function solve() {
    let restaurants = eval(document.querySelector('textarea').value);
    let bestRestaurantPara = document.querySelector('#bestRestaurant p');
    let bestWorkersPara = document.querySelector('#workers p');
    let highestAverageSalary = 0;
    let bestSalary = 0;
    let mostProfitable = '';

    let register = {};

    for (let restaurant of restaurants) {
        [restaurantName, empString] = restaurant.split(' - ');
        let employees = empString.split(', ').map(e => e.split(' '));
        employees.forEach(e => e[1] = Number(e[1]));

        if (!(restaurantName in Object.keys(register))) {
            register[restaurantName] = {};
        }
        for (let [empName, salary] of employees) {
            register[restaurantName][empName] = salary;
        }
    }
    for (let [name, emps] of Object.entries(register)) {
        let currAvg = 0;
        let currSum = 0;

        Object.values(emps).forEach(s => {currSum += s});
        currAvg = (currSum / Object.keys(emps).length);

        if (currAvg > highestAverageSalary) {
            mostProfitable = name;
            highestAverageSalary = currAvg.toFixed(2);
            bestSalary = Math.max(...Object.values(emps)).toFixed(2);
        }
    }

    let empsInfo = [];

    for (let [name, salary] of Object.entries(register[mostProfitable]).toSorted((a, b) => b[1] - a[1])) {
        empsInfo.push(`Name: ${name} With Salary: ${salary}`);
    }

    asString = empsInfo.join(' ');

    bestWorkersPara.textContent = asString;
    bestRestaurantPara.textContent = `Name: ${mostProfitable} Average Salary: ${highestAverageSalary} Best Salary: ${bestSalary}`;
}
