document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('posts-container');
  const bookmarksContainer = document.getElementById('bookmarks-container');

  // Load bookmarks from localStorage
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

  function renderBookmarks() {
    bookmarksContainer.innerHTML = '';
    bookmarks.forEach(post => {
      const card = createPostCard(post, false);
      bookmarksContainer.appendChild(card);
    });
  }

  function createPostCard(post, showBookmark = true) {
    const card = document.createElement('a');
    card.href = post.url;
    card.className = 'post-card';

    const img = document.createElement('img');
    img.alt = post.title;
    img.src = post.image || 'https://via.placeholder.com/200x140?text=No+Image';
    img.onerror = () => { img.src = 'https://via.placeholder.com/200x140?text=No+Image'; };

    const titleDiv = document.createElement('div');
    titleDiv.className = 'post-title';
    titleDiv.textContent = post.title;

    card.appendChild(img);
    card.appendChild(titleDiv);

    if (showBookmark) {
      const btn = document.createElement('button');
      btn.textContent = 'Bookmark';
      btn.className = 'bookmark-btn';
      btn.addEventListener('click', (e) => {
        e.preventDefault(); // prevent navigating to post
        if (!bookmarks.some(b => b.url === post.url)) {
          bookmarks.push(post);
          localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
          renderBookmarks();
        }
      });
      card.appendChild(btn);
    }

    return card;
  }

  // Fetch posts.json
  fetch('posts.json')
    .then(res => res.json())
    .then(posts => {
      posts.forEach(post => {
        const card = createPostCard(post, true);
        container.appendChild(card);
      });
      renderBookmarks();
    })
    .catch(err => {
      console.error(err);
      container.innerHTML = '<p>Failed to load posts.</p>';
    });
});
