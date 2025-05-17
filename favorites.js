document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/getFavs')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('favorites-list');
      container.innerHTML = '';

      if (!data || data.length === 0) {
        container.innerHTML = '<p>No saved quotes yet.</p>';
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
      console.error('Error loading quotes:', err);
      document.getElementById('favorites-list').innerText = "Failed to load saved quotes.";
    });
});
