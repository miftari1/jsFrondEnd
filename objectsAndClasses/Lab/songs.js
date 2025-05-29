function solve(inputArray) {
    let songs = [];

    class Song {
        typeList;
        name;
        time;

        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

    }

    let numberSongs = inputArray.shift();
    let searchedType = inputArray.pop();

    for (let songData of inputArray) {
        [type, title, time] = songData.split('_');

        let song = new Song(type, title, time);
        songs.push(song);
    }

    if (searchedType == 'all') {
        songs.forEach(s => console.log(s.name));
    }
    else {
        let filtered = songs.filter(s => s.typeList == searchedType);

        filtered.forEach(s => console.log(s.name));
    }
}

solve([
    3, 
    'favourite_DownTown_3:14', 
    'favourite_Kiss_4:16',
     'favourite_Smooth Criminal_4:01',
      'favourite'
    ]);

solve([
    4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'
]);

solve([
    2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
]);