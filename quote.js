function getQuote() {
    const quoteDiv = document.getElementById('quote');

    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteDiv.innerHTML = `"${data.content}" - ${data.author}`;
        })
        .catch(error => {
            console.log(error);
            quoteDiv.innerHTML = 'An error occurred. Please try again.';
        })
}

getQuote();
