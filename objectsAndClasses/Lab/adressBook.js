function solve(addresses) {
    let addressRegister = {};

    for (let address of addresses) {
        [name, street] = address.split(':');

        addressRegister[name] = street;
    }

    let entries = Object.entries(addressRegister);

    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, street] of entries) {
        console.log(`${name} -> ${street}`);
    }
}

solve([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);

solve([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
]);