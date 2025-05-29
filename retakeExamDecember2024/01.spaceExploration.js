function solve(inputArr) {
    let n = inputArr.shift();
    let austronauts = {}; 
    let skills = {}; 

    for (let i=0; i<n; i++) {
        let line = inputArr.shift();
        [name, area, personalSkills] = line.split(' ');
        personalSkills = personalSkills.split(',');

        austronauts[name] = area;
        skills[name] = personalSkills;
    }

    let actions = {
        'Perform': onPerform,
        'Transfer': onTransfer,
        'Learn Skill': onLearn
    }

    function onPerform(arr) {
        [name, area, task] = arr;

        if (austronauts[name] == area && skills[name].includes(task)) {
            console.log(`${name} has successfully performed the skill: ${task}!`);
        }
        else {
            console.log(`${name} cannot perform the skill: ${task}.`);
        }
    }

    function onTransfer(arr) {
        [name, newArea] = arr;

        austronauts[name] = newArea;
        console.log(`${name} has been transferred to: ${newArea}`);
    }

    function onLearn(arr) {
        [name, newSkill] = arr;

        if (skills[name].includes(newSkill)) {
            console.log(`${name} already knows the skill: ${newSkill}.`)
        }
        else {
            skills[name].push(newSkill);
            console.log(`${name} has learned a new skill: ${newSkill}.`);
        }
    }

    while(inputArr[0] != 'End') {
        let line = inputArr.shift();
        let tokens = line.split(' / ');
        let command = tokens.shift();

        let action = actions[command];
        action(tokens);
    }

    for (let austronaut of Object.entries(austronauts)) {
        [name, area] = austronaut;
        personalSkills = skills[name].toSorted((a, b) => a.localeCompare(b));
        asString = personalSkills.join(', ');

        console.log(`Astronaut: ${name}, Section: ${area}, Skills: ${asString}`);
    }
}

solve([ 
    "2", 
    "Alice command_module piloting,communications", 
    "Bob engineering_bay repair,maintenance", 
    "Perform / Alice / command_module / piloting", 
    "Perform / Bob / command_module / repair", 
    "Learn Skill / Alice / navigation", 
    "Perform / Alice / command_module / navigation", 
    "Transfer / Bob / command_module", 
    "Perform / Bob / command_module / maintenance", 
    "End" 
] 
);
