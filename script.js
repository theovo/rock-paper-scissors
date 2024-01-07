function getRandomInt(min, max) {
    min = Math.ceil(min); // makes min inclusive
    max = Math.floor(max); // makes max inclusive
    let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

    let a = "Rock";
    let b = "Paper";
    let c = "Scissors";

    if (randomInt === 1) {
        return a;
    } else if (randomInt === 2) {
        return b;
    } else {
        return c;
    };
}

console.log(getRandomInt(1,3));