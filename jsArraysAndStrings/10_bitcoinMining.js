function solve(inputArray) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    const stolenAmount = 0.3;
    let currentDay = 0;
    let sumMoney = 0;
    let purchasedBitcoins = 0;
    let firstPurchaseDay = 0;
    let goldMined = 0;
    let currentWage = 0;

    // Start iteratinng over the array
    // Check if the possessed money is enough to buy a bitcoin
    // If yes, increment the bitcoin amount, store the index of the current day and subtract the bitcoin price from the possessed money
    // Check if current day is third
    // If yes, subtract stolenAmount from possessed money
    // Sum up the money
    
    // After loop is finished print the amount of bitcoins bought
    // If there is bought bitcoins, print the day of first purchase 
    // Print money left rounded to second digit

    for (let i=0; i < inputArray.length; i++) {
        currentDay = i + 1;
        goldMined = Number(inputArray[i]);
        currentWage = goldMined * goldPrice;

        if (currentDay % 3 == 0) {
            currentWage = currentWage - (currentWage * stolenAmount);
        }

        sumMoney += currentWage;

        while ((sumMoney - bitcoinPrice) >= 0) {

            purchasedBitcoins += 1;
            sumMoney -= bitcoinPrice;

            if (firstPurchaseDay == 0) {
                firstPurchaseDay = currentDay;
            }
        }
    }
    console.log(`Bought bitcoins: ${purchasedBitcoins}`);

    if (firstPurchaseDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchaseDay}`);
    }

    console.log(`Left money: ${sumMoney.toFixed(2)} lv.`);
}

solve([100, 200, 300]);
solve([3124.15, 504.212, 2511.124]);