function solve(instructions) {
    let movies = [];

    for (let instruction of instructions) {
        if (instruction.includes('addMovie')) {
            let movieName = instruction.slice('addMovie'.length + 1);

            let movieObj = {
                name: movieName
            };
            
            movies.push(movieObj);

        }
        else if (instruction.includes('directedBy')) {
            let [movieName, director] = instruction.split(' directedBy ');

            for (let m of movies) {
                if (m.name === movieName) {
                    m.director = director;
                    break;
                }
            }
        }
        else if (instruction.includes('onDate')) {
            let [movieName, date] = instruction.split(' onDate ');

            for (let m of movies) {
                if (m.name === movieName) {
                    m.date = date;
                    break;
                }
            }
        }
    }
    
    for (let m of movies) {
        if (Object.keys(m).length == 3) {
            console.log(JSON.stringify(m));
        }
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
);
solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
);