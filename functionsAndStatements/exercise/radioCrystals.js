function solve([desiredThickness, ...chunks]) {
    const operations = {
        'Cut': (x) => {x / 4},
        'Lap': (x) => {x * 0.8},
        'Grind': (x) => {x - 20},
        'Etch': (x) => {x - 2},
        'X-ray': (x) => {x + 1},
        'Transporting and washing': (x) => {Math.floor(x)}
    }
    
    let operationsLog = [];

    for (let chunk of chunks) {
        console.log(`Processing chunk ${chunk} microns`);

    }
}

console.log(solve([1375, 50000]));
console.log(solve([1000, 4000, 8100]));