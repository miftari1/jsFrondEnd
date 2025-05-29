function solve(firstName, lastName, age) {
    let person = {};

    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;
}

console.log(solve("Peter", "Pan", "20"));
console.log(solve("George", "Smith", "18"));