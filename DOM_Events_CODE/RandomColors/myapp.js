const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

document.querySelector('body').style.textAlign = 'center';



btn.addEventListener('click', () => {
    let rndm = randomize();
    document.body.style.backgroundColor = rndm;
    h1.innerText = rndm;
})

function randomize() {
    const r = Math.floor(255 * Math.random()) + 1;
    const g = Math.floor(255 * Math.random()) + 1;
    const b = Math.floor(255 * Math.random()) + 1;
    if (r < 120 && g < 120 && b < 120 ){
        h1.style.color = "white";
       }
    return `rgb(${r}, ${g}, ${b})`
}




// const zero = 0;
// function findAverage(array) {
// cost arr = array.reduce()