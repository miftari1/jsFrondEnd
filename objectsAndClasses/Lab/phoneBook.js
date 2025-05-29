function solve(contacts) {
    phoneBook = {}

    for (let contact of contacts) {
        [name, number] = contact.split(' ');
        
        phoneBook[name] = number;
    }

    let result = [];

    for (let name in phoneBook) {
        result.push(`${name} -> ${phoneBook[name]}`);
    }

    return result.join('\n');
}

console.log(solve([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]));

console.log(solve([
    'George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'
]));
