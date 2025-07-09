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

// using Promises
function fetchPostsThen(num) {
    const posts = [];
    let fetched = 0;

    for (let i = 1; i <= num; i++) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
            .then(response => response.json())
            .then(data => {
                posts[i - 1] = data;
                fetched++;
                if (fetched === num) {
                    renderPosts(posts);
                }
            })
            .catch(err => {
                alert(err.message);
            });
    }
}

// using async/await
async function fetchPostsAsync(num) {
    const posts = [];
    for (let i = 1; i <= num; i++) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`);
            const data = await response.json();
            posts.push(data);
        } catch (err) {
            alert(err.message);
            return;
        }
    }
    renderPosts(posts);
}

// examples:
// fetchPostsThen(3);
fetchPostsAsync(5);