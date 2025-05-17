<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> ed30fc281d4112c6b9e904ae31753f4ad94c703c
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
<<<<<<< HEAD
=======
>>>>>>> b689ac5 (fix vercel routing and quotes)
>>>>>>> ed30fc281d4112c6b9e904ae31753f4ad94c703c
