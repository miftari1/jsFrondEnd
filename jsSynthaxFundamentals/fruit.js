function solve(fruit_type, weight_in_grams, price_per_kg) {
    let weight_in_kg = weight_in_grams/1000;
    let calculated_price = (price_per_kg * weight_in_kg).toFixed(2);
    
    let msg = `I need \$${calculated_price} to buy ${weight_in_kg.toFixed(2)} kilograms ${fruit_type}.`;
    return msg;
}

console.log(solve('orange', 2500, 1.80))