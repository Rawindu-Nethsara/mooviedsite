document.addEventListener('DOMContentLoaded', () => {
  fetch('posts.json')
    .then(response => {
      if (!response.ok) throw new Error('Cannot fetch posts.json');
      return response.json();
    })
    .then(posts => {
      const container = document.getElementById('posts-container');
      posts.forEach(post => {
        const card = document.createElement('a');
        card.href = post.url;
        card.className = 'post-card';

        // Image
        const img = document.createElement('img');
        img.alt = post.title;
        img.src = post.image || 'https://via.placeholder.com/200x140?text=No+Image';
        img.onerror = () => {
          img.src = 'https://via.placeholder.com/200x140?text=No+Image';
        };

        // Title
        const titleDiv = document.createElement('div');
        titleDiv.className = 'post-title';
        titleDiv.textContent = post.title;

        card.appendChild(img);
        card.appendChild(titleDiv);
        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error(err);
      document.getElementById('posts-container').innerHTML = '<p>Failed to load posts.</p>';
    });
});

