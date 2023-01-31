const jokes = require('give-me-a-joke');
const colors = require('colors');
const cowsay = require('cowsay'); 

const fs = require('fs');
// console.log(fs);

const folderName = process.argv[2] || 'Project'

function jk() {
    jokes.getRandomDadJoke(function (joke) {
        console.log('Joke: ', joke.green, 'XDDDD'.red) 
    })
}

for (let i = 0; i < folderName; i++) {
    jk();
};


// for (let i = 0; i < folderName; i++) {
//     console.log(joke.rainbow, '<3'.red) 
// }


