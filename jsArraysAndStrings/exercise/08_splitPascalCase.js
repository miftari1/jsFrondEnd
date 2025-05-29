function solve(text) {
    let re = /(?=[A-Z])/g;

    result = text.split(re);
    console.log(result.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');   