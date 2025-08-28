fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('posts-container');

    posts.forEach(post => {
      const card = document.createElement('a'); // card is clickable
      card.href = post.url;
      card.classList.add('post-card');

      const img = document.createElement('img');
      img.src = post.image || 'images/default.jpg';
      img.alt = post.title;

      const titleDiv = document.createElement('div');
      titleDiv.classList.add('post-title');
      titleDiv.textContent = post.title;

      card.appendChild(img);
      card.appendChild(titleDiv);

      container.appendChild(card);
    });
  });
