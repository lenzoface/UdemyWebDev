console.log('hello, world!');
const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = '';
});

const makeImages = (shows) => {
    for (const result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        } else {
            alert('No image for one or all the TV shows you are looking for!');
        }
    }
};


const deleteAll = document.querySelector('#delete')
const deleteImgs = function () {
    const imgs = document.querySelectorAll('IMG');
     for(let i = 0; i < imgs.length; i++){
        imgs[i].remove();
     }
    };

deleteAll.addEventListener('click', deleteImgs);