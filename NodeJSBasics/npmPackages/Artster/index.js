const fs = require('fs');
// console.log(fs);
const folderName = process.argv[2] || 'sfdasfsd'

const figlet = require('figlet');
const colors = require('colors');

function text() {
    function funcOne() {
        figlet('I Fucking Love Umyt MAN', async function (err, data) {
        if (err) {
            // console.log('Something went wrong...');
            // console.dir(err);
            return;
        }
        console.log(data.green);
    })};
    figlet('<3', async function (err, data) {
        await funcOne();
        if (err) {
            // console.log('Something went wrong...');
            // console.dir(err);
            return;
        }
        console.log(data.red);
    });
}

for (let i = 0; i < folderName; i++) {
    text();
};



// *********** MAKE BIG RANDOM NUMBERS: ************
// function text() {
//         figlet(`${Math.floor(Math.random() * ((9000000000000 - 1000000000000 + 1)) + 1000000000000) * 22221111111}`, async function (err, data) {
//         if (err) {
//             console.log('Something went wrong...');
//             console.dir(err);
//             return;
//         }
//         console.log(data.green);
//     })}