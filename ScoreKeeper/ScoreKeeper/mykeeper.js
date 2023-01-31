let player1 = document.getElementById('p1'); //span
let player2 = document.getElementById('p2'); //span табло

let forms = document.getElementById('form'); //form в целом
let plus1 = document.getElementById('plus1');
let plus2 = document.getElementById('plus2');

let scrSlct = document.getElementById('scrSlct'); //score selector
const p1Scr = document.createElement('value'); // to create a value to p1 span
const p2Scr = document.createElement('value'); // to create a value to p2 span
player1.append(p1Scr);
player2.append(p2Scr);
player1.value = 0;
player2.value = 0;

plus1.addEventListener('click', function(e){
    e.stopPropagation();
    for (let i = 0; i < 1; i++) {
        player1.value ++
      }
    player1.innerText = player1.value;
});
plus2.addEventListener('click', function(e){
    for (let i = 0; i < 1; i++) {
        player2.value ++
      }
    player2.innerText = player2.value;
    e.stopPropagation();
});

forms.addEventListener('click', function(e) {
    e.preventDefault();
    // for (let i = 0; i < 1; i++) {
    //     player1.value ++
    //     player2.value ++
    //   }
    // player1.innerText = player1.value;
    // player2.innerText = player2.value;
    // // if (player1.value === scrSlct.value) {
    // //     player1.style.color = 'green';
    // // }
});

const reset = document.getElementById('reset')

reset.addEventListener('click', function(e) {
    player1.value = 0;
    player2.value = 0;
})
