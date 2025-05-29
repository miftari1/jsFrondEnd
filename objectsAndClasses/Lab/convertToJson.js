function solve(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    }

    let asJSON = JSON.stringify(person);

    return asJSON;
}

console.log(solve('George', 'Jones', 'Brown'));
console.log(solve('Peter', 'Smith', 'Blond'));