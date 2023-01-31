const container = document.getElementById('container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 0; i < 900; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span')
    label.innerText = `No.${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`;

    // pokemon.style.display = ('inline');
    // newImg.style.display = ('block');
    pokemon.append(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}

