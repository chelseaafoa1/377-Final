document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/getFavs')
    .then(res=> res.json())
    .then(data=> {
        const container = document.getElementById('favorites-list');
        container.innerHTML='';

        if (!data || data.length === 0) {
            container.innerHTML='<p> no saved</p>';
            return;
        }
    

    data.forEach(item=> {
        const quoteE1 = document.createElement('div');
        quoteE1.classList.add('quote-card');
        quoteE1.innerHTML= `
            <p>"${item.quote}"</p>
            <p><strong>— ${item.author}</strong></p>
            <hr>
            `;
            container.appendChild(quoteE1);
    });
})
.catch(err=> {
    console.error('error loading', err);
    document.getElementById('favorites-list').innerText="failed to load saved quotes";
});
});
