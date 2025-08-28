// Fetch posts from JSON
fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('posts-container');
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');

      const title = document.createElement('a');
      title.href = post.url;
      title.textContent = post.title;
      title.classList.add('post-title');

      const labels = document.createElement('div');
      labels.textContent = "Labels: " + post.labels.join(', ');
      labels.classList.add('post-labels');

      postDiv.appendChild(title);
      postDiv.appendChild(labels);
      container.appendChild(postDiv);
    });
  });
