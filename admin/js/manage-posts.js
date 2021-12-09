



async function addBlogPostsToAdmin() {

    let blogPosts = await fetchBlogPosts();
    let tableBody = document.querySelector('tbody');

    tableBody.innerHTML = '';

    for (let post of blogPosts) {
        console.log(post);
        tableBody.innerHTML += `
            <tr>
                <td>${post.title}</td>
                <td>${post.author}</td>
                <td>${post.date}</td>
                <td>
                    <button>Radera inlägg</button>
                    <a href="update-post.html">Uppdatera</a>
                </td>
            </tr>
        `;
    }
}

async function fetchBlogPosts() {
    try {
        let response = await fetch('http://localhost:5000/posts');
        let blogPosts = await response.json();
        return blogPosts;
    }
    catch(error) {
        console.log(error);
    }
}

addBlogPostsToAdmin();