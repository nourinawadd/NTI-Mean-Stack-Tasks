function renderPosts(posts) {
    const container = document.getElementById("postsContainer");
    container.innerHTML = "";
    posts.forEach(post => {
        const card = document.createElement("div");
        card.style.border = "1px solid #ccc";
        card.style.margin = "10px";
        card.style.padding = "10px";
        card.style.borderRadius = "8px";
        card.style.background = "#f9f9f9";
        card.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        container.appendChild(card);
    });
}

// Using Promises (then)
function fetchPostsThen(num) {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            renderPosts(data.slice(0, num));
        })
        .catch(err => {
            alert(err.message);
        });
}

// Using async/await
async function fetchPostsAsync(num) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        renderPosts(data.slice(0, num));
    } catch (err) {
        alert(err.message);
    }
}

// examples:
//fetchPostsThen(3);
// fetchPostsAsync(5);