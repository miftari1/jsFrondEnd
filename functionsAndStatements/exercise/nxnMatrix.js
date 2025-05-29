function createMatrix(num) {
    function createColumns(numColumns) {
        let row = [];

        for (let i = 0; i < numColumns; i++) {
            row.push(numColumns);
        }
        
        console.log(row.join(' '))
    }

    for (let i = 0; i < num; i++) {
        createColumns(num);
    }
}

createMatrix(3);
createMatrix(7);
createMatrix(2);