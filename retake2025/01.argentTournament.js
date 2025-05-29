function solve(inputArr) {
    let n = inputArr.shift();

    let knights = {};

    for (let i=0;i<n;i++) {
        let knightData = inputArr.shift();
        [name, stamina, points, victories] = knightData.split(' ');

        let record = {
            name,
            stamina: Number(stamina),
            points: Number(points),
            victories: Number(victories)
        };

        knights[name] = record;
    }

    function onDuel(arr) {
        [name, neededStamina] = arr;
        let currentStamina = Number(knights[name].stamina);
        neededStamina = Number(neededStamina);

        if (currentStamina >= neededStamina) {
            let staminaLeft = currentStamina - neededStamina;

            knights[name].stamina = staminaLeft;
            knights[name].victories += 1;

            let pointsAfterDuel = Math.floor(knights[name].points * 1.1);

            if (pointsAfterDuel > 200) {
                knights[name].points = 200;
            }
            else {
                knights[name].points = pointsAfterDuel;
            }

            console.log(`Knight ${name} won the duel and now has ${staminaLeft} stamina!`);

        }
        else {
            console.log(`Knight ${name} does not have enough forces to duel!`);
        }
    }

    function onTrain(arr) {
        [name, pointsToAdd] = arr;

        let currentPoints = knights[name].points;

        if (currentPoints == 200) {
           console.log(`Knight ${name} has already mastered their skills!`);
        }
        else {
            let pointsAfterIncrease = currentPoints + Number(pointsToAdd);
            let gainedPoints = 0;

            if (pointsAfterIncrease > 200) {
                knights[name].points = 200;

                gainedPoints = 200 - currentPoints;
            }   
            else {
                knights[name].points = pointsAfterIncrease;
                gainedPoints = pointsToAdd;
            }

            console.log(`Knight ${name} trained and gained ${gainedPoints} skill points!`);
        }

    }

    function onRest(arr) {
        [name, staminaToAdd] = arr;
        let currentStamina = Number(knights[name].stamina);
        staminaToAdd = Number(staminaToAdd);

        if (currentStamina == 100) {
            console.log(`Knight ${name} is already fully rested!`);
        }
        else {
            let staminaAfterRest = currentStamina + staminaToAdd;
            let gainedStamina = 0;

            if (staminaAfterRest > 100) {
                knights[name].stamina = 100;
                gainedStamina = 100 - currentStamina;
            }
            else {
                knights[name].stamina = staminaAfterRest;
                gainedStamina = staminaToAdd;
            }

            console.log(`Knight ${name} rested and regained ${gainedStamina} stamina!`)
        }
    }

    let commands = {
        'Duel': onDuel,
        'Train': onTrain,
        'Rest': onRest
    };

    while(inputArr[0].toLowerCase() != 'end') {
        let line = inputArr.shift();
        let tokens = line.split(' - ');
        let command = tokens.shift();
        command = command[0].toUpperCase() + command.slice(1).toLowerCase(); // Converting to Pascal Case
        
        commands[command](tokens);
    }

    let knightsWithPoints = [];

    for (let knight of Object.values(knights)) {
        knightsWithPoints
        console.log(`Knight: ${knight.name}, Stamina: ${knight.stamina}, Skill: ${knight.points}`);
    } 

    let sortedKnights = Object.values(knights).toSorted((a, b) => b.victories - a.victories);

    console.log('Rank List:');

    let i = 1;
    for (let knight of sortedKnights) {
        console.log(`${i}. ${knight.name} - ${knight.victories} wins`);
        i++;
    }

}

solve([     
    '3', 
    'Arthur 60 150 0', 
    'Lancelot 80 180 2', 
    'Gawain 50 140 3', 
    'Duel - Arthur - 40', 
    'Train - Lancelot - 30', 
    'Rest - Gawain - 20', 
    'TrAiN - Arthur - 100', 
    'reSt - Lancelot - 50', 
    'DUEl - Lancelot - 70', 
    "End" 
]);

solve([ 
'4', 
'Tristan 40 120 0',
'Percival 70 160 0', 
'Galahad 90 200 0', 
'Mordred 60 100 0', 
'DUEl - Tristan - 50', 
'TraIN - Percival - 50', 
'REST - Galahad - 15', 
'Train - Mordred - 60', 
'DuEL - Tristan - 20', 
'END' 
]);