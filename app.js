const form = document.querySelector('#search-form');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const userInput = form.elements.query.value;
    console.log(userInput)
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${userInput}`)
    makeImg(res.data);
    form.elements.query.value = '';
})

const makeImg = (shows) => {
    for (let res of shows) {
        if (res.show.image) {
            const newImg = document.createElement('IMG');
            newImg.src = res.show.image.medium;
            document.body.append(newImg);
        }
    }
}