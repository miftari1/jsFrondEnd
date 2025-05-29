function solve(inputArr) {
    let n = inputArr.shift();
    let farmers = [];

    for (let i=0; i<n; i++) {
        [name, area, tasks] = inputArr[i].split(' ');
        tasks = tasks.split(',');

        let farmer = {};

        farmer.name = name;
        farmer.area = area;
        farmer.tasks = tasks;

        farmers.push(farmer);
        console.log(farmer);
    }

    for (let i=n; i < inputArr.length - 1; i++) {
        let command = inputArr[i].split(' / ');

        if ('Execute' in command) {
            [name, area, task] = command;

            for (let farmer of farmers) {
            
            }
        }
        else if ('Change Area' in command) {

        }
        else {

        }
    }

}

(solve([   
    "2",
    "John garden watering,weeding",
    "Mary barn feeding,cleaning",
    "Execute / John / garden / watering",
    "Execute / Mary / garden / feeding",
    "Learn Task / John / planting",
    "Execute / John / garden / planting",
    "Change Area / Mary / garden",
    "Execute / Mary / garden / cleaning",
    "End"
    ]));