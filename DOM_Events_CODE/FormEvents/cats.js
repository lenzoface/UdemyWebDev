const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats')
// input.value - shows whats inside the form/input

form.addEventListener('submit', function(e){
    e.preventDefault();
    const catName = input.value;
    const newLi = document.createElement('LI');
    newLi.innerText = catName;
    list.append(newLi);
    input.value = '';
});


const num = document.querySelector('num');
