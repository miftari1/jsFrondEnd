function solve(inputArr) {
    let n = inputArr.shift();
    let farmers = {};
    let skills = {};

    for (let i=0;i<n;i++) {
        let line = inputArr.shift();
        [name, area, farmerSkills] = line.split(' ');
        farmerSkills = farmerSkills.split(',');

        farmers[name] = area;
        skills[name] = farmerSkills;
    }

    let actions = {
        'Execute': executeTask,
        'Change Area': changeArea,
        'Learn Task': learnTask
    }

    function executeTask(arr) {
        [name, area, task] = arr;

        if (farmers[name] == area && skills[name].includes(task)) {
            console.log(`${name} has executed the task: ${task}!`);
        }
        else {
            console.log(`${name} cannot execute the task: ${task}.`);
        }
    }

    function changeArea(arr) {
        [name, newArea] = arr;

        farmers[name] = newArea;

        console.log(`${name} has changed their work area to: ${newArea}`);
    }   

    function learnTask(arr) {
        [name, newTask] = arr;

        if(skills[name].includes(newTask)) {
            console.log(`${name} already knows how to perform ${newTask}.`);
        }
        else {
            skills[name].push(newTask);
            console.log(`${name} has learned a new task: ${newTask}.`)
        }
    }

    while (inputArr[0] != 'End') {
        let line = inputArr.shift();
        let tokens = line.split(' / ');
        let commandName = tokens.shift();
        
        actions[commandName](tokens);
    }

    for ([name, area] of Object.entries(farmers)) {
        let tasks = skills[name].toSorted((a, b) => a.localeCompare(b));
        asString = tasks.join(', ');

        console.log(`Farmer: ${name}, Area: ${area}, Tasks: ${asString}`);
    }
}

solve([ 
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
]);
