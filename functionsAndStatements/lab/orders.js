function calculateTotalPrice(product, quantity) {

    let totalPrice = 0;
    // Available products with price per piece: 
    // coffee - 1.50,
    // coke - 1.40,
    // water - 1.00,
    // snacks - 2.00

    switch(product) {
        case 'coffee':
            totalPrice = 1.50 * quantity;
            break;
        case 'coke':
            totalPrice = 1.40 * quantity;
            break;
        case 'water':
            totalPrice = 1.00 * quantity;
            break;
        case 'snacks':
            totalPrice = 2.00 * quantity;
            break;
    }

    return totalPrice.toFixed(2);
}

console.log(calculateTotalPrice("water", 5));
console.log(calculateTotalPrice("coffee", 2));