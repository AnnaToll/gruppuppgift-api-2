addBlogPostsToAdmin();


async function addBlogPostsToAdmin() {

    let blogPosts = await fetchBlogPosts();
    let tableBody = document.querySelector('tbody');

    tableBody.innerHTML = '';

    for (let post of blogPosts) {
        let date = new Date(post.date);
        let month = convertMonth(date.getMonth());
    
        let tableRow = document.createElement('tr');
        tableBody.append(tableRow);

        tableRow.innerHTML += `
            <td>${post.title}</td>
            <td>${post.author}</td>
            <td>${date.getDate()} ${month} - ${date.getFullYear()}</td>
            <td>
                <button>Radera inlägg</button>
                <a href="update-post.html">Uppdatera</a>
            </td>
        `;

        tableRow.children[3].firstElementChild.addEventListener('click', async () => {

            try {
                fetch(`http://localhost:5000/posts/${post._id}`, {
                method: 'DELETE'
                });
            }
            catch(error) {
                console.log(error);
            }

            window.location.reload();
        })
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

function convertMonth(month) {
    switch (month) {
        case 0:
            month = "januari";
            break;
        case 1:
            month = "februari";
            break;
        case 2:
            month = "mars";
            break;
        case 3:
            month = "april";
            break;
        case 4:
            month = "maj";
            break;
        case 5:
            month = "juni";
            break;
        case 6:
            month = "juli";
            break;
        case 7:
            month = "augusti";
            break;
        case 8:
            month = "september";
            break;
        case 9:
            month = "oktober";
            break;
        case 10:
            month = "november";
            break;
        case 11:
            month = "december";
      }
      return month;
}