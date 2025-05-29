function solve(stringArray) {
    class Cat {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }

    for (let cat of stringArray) {
        [catName, catAge] = cat.split(' ');

        catObj = new Cat(catName, catAge);

        console.log(catObj.meow());
    }
}

solve(['Mellow 2', 'Tom 5']);
solve(['Candy 1', 'Poppy 3', 'Nyx 2']);