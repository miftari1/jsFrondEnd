function solve(obj) {
    let result = [];

    for (let [key, value] of Object.entries(obj)) {
        result.push(`${key} -> ${value}`);
    }

    return result.join('\n');
}

console.log(solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}));

console.log(solve({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}));