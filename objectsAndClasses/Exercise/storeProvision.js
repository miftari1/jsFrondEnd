function solve(stockArr, orderedArr) {

    let currentStock = {};

    while(stockArr.length > 0) {
        [product, quantity] = stockArr.splice(0, 2);
        currentStock[product] = Number(quantity);
    }
    while (orderedArr.length > 0) {
        [product, quantity] = orderedArr.splice(0, 2);
        
        if(Object.hasOwn(currentStock, product)) {
            currentStock[product] += Number(quantity);
        }
        else {
            currentStock[product] = Number(quantity);
        }
    }

    for (let [product, quantity] of Object.entries(currentStock)) {
        console.log(`${product} -> ${quantity}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
]);

solve([ 
    'Salt', '2', 'Fanta', '4', 'Apple', '14',
     'Water', '4', 'Juice', '5'
     ], 
    [ 
    'Sugar', '44', 'Oil', '12', 'Apple', '7',
     'Tomatoes', '7', 'Bananas', '30'
 ]);