function solve(arr) {
    towns = [];


    townInfo = arr.map(e => e.split(' | '));
    
    for (let currTown of townInfo) {
        [town, latitude, longitude] = currTown;

        obj = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }

        console.log(obj);
    }
}

solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
solve(['Plovdiv | 136.45 | 812.575']);