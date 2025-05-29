function solve(actions) {

    const effects = {
        'soap': '+ 10',
        'water': '* 1.2',
        'vacuum cleaner': ' * 1.25',
        'mud': '* 0.9'
    }

    let value = 0;

    for (let action of actions) {
        if (Object.hasOwn(effects, action)) {
            value = eval(String(value) + effects[action]);
        }
    }

    return `The car is ${value.toFixed(2)}% clean.`;
}

console.log(solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));
console.log(solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]));