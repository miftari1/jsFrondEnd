function solve(inputArr) {
    let heroes = [];

    for (let hero of inputArr) {
        [heroName, level, items] = hero.split(' / ');
        items = items.split(', ');

        hero = {
            name: heroName,
            level: level,
            items: items
        }

        heroes.push(hero);
    }   

    for (let hero of heroes) {
        console.log();
    }
};

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);
solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);