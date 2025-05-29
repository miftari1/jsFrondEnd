function solve(jsonString) {
    let asObj = JSON.parse(jsonString);
    let result = [];

    for (let [key, value] of Object.entries(asObj)) {
        result.push(`${key}: ${value}`);
    }

    return result.join('\n');
}

console.log(solve('{"name": "George", "age": 40, "town": "Sofia"}'));
console.log(solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}'));