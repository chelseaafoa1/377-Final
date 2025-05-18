document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/api/getFavs')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('favorites-list'); //FAVORITES
      container.innerHTML = '';

      if (!data || data.length === 0) {
        container.innerHTML = '<p>No saved quotes yet.</p>'; //NO SAVED QUOTES
        return;
      }

      data.forEach(item => {
        const quoteEl = document.createElement('div');
        quoteEl.classList.add('quote-card');
        quoteEl.innerHTML = `
          <p>"${item.quote}"</p>
          <p><strong>— ${item.author}</strong></p>
          <hr>
        `;
        container.appendChild(quoteEl);
      });
    })
    .catch(err => {
  console.error(' Error loading quotes:', err); //ERROR
  if (err instanceof Response) {
    err.text().then(text => console.error('Response text:', text));
  }
  document.getElementById('favorites-list').innerText = "Failed to load saved quotes.";
}); //FAILED TO LOAD

});
