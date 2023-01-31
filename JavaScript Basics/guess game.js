console.log("HELLO THERE!")

let rndm = Math.random();
if (rndm > 0.5) {
    console.log("Number is less than 0.5!");
    console.log(rndm);
} else {
    console.log("Number is greater than 0.5!");
    console.log(rndm);
}

// if (rndm > 0.5) {
//     console.log("Number is greater than 0.5!");
//     console.log(rndm);
// }

let cats = ['blue', 'kitty']
let dogs = ['rust', 'wyatt']
console.log(cats.concat(dogs))


// ['blue', 'kitty', 'rust', 'wyatt']

// .includes(...) - if an array include a given item, true/false

// .indexOf('...') - finds an index in array (0/1/2...), -1 is not present

// .reverse() - changes original, reverses an array 

// .slice(?start, ?end) - copies smth from an array

// The splice() method changes the contents of an array by removing/deleting or replacing existing elements and/or adding new elements in place.

// array === array - false

let maximum = parseInt(prompt('Enter the maximum number!'));
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('Enter your first guess (type "q" to quit)'));
let attempts = 1;

while  ( parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt('Too high! Enter a new guess:');
    }
    else {
        guess = prompt('Too low! Enter a new guess:')
    }
}
if (guess === 'q') {
    console.log(`You gave up at attempt #${attempts}`)
}
else {
    console.log(`You got it! It took you ${attempts} guesses`);
}


movies.reduce((hig, scr) => {
    if (score.hig > score.scr) {
        return hig
    }
    return scr
})