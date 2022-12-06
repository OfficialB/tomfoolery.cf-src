function generateMeme() {
    const memeContainer = document.getElementById("meme-container");
    
    memeContainer.innerHTML = "";
    
    fetch("https://meme-api.com/gimme")
        .then(response => response.json())
        .then(data => {
            const memeImg = document.createElement("img");
            memeImg.src = data.url;
            memeContainer.appendChild(memeImg);
        })
        .catch(error => {
            console.log(error);
        });
}
