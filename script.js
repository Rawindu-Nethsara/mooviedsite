// Fetch posts from JSON
fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('posts-container');

    posts.forEach(post => {
      // Create clickable card
      const card = document.createElement('a');
      card.href = post.url;
      card.classList.add('post-card');

      // Create image
      const img = document.createElement('img');
      img.src = post.image || 'https://via.placeholder.com/200x140?text=No+Image';
      img.alt = post.title;

      // Fallback if image fails
      img.onerror = () => {
        img.src = 'https://via.placeholder.com/200x140?text=No+Image';
      };

      // Create title div
      const titleDiv = document.createElement('div');
      titleDiv.classList.add('post-title');
      titleDiv.textContent = post.title;

      // Append image and title to card
      card.appendChild(img);
      card.appendChild(titleDiv);

      // Append card to container
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error loading posts:', error);
    const container = document.getElementById('posts-container');
    container.innerHTML = '<p>Failed to load posts.</p>';
  });
