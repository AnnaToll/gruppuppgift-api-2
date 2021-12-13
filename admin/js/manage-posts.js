// let errorMessageContainer = createErrorMessage();

addBlogPostsToAdmin();


async function addBlogPostsToAdmin() {

    let tableBody = document.querySelector('tbody');
    let blogPosts = await fetchBlogPosts(tableBody);

    console.log(blogPosts);

    if(blogPosts == undefined) return;

    tableBody.innerHTML = '';

    for (let post of blogPosts) {
        let date = new Date(post.date),
            month = convertMonth(date.getMonth()),
            tableRow = document.createElement('tr');

        tableBody.append(tableRow);

        tableRow.innerHTML += `
            <td>${post.title}</td>
            <td>${post.author}</td>
            <td>${date.getDate()} ${month} - ${date.getFullYear()}</td>
            <td>
                <button>Radera inlägg</button>
                <a href="update-post.html?id=${post._id}">Uppdatera</a>
            </td>
        `;

        let btnErase = tableRow.children[3].firstElementChild;

        btnErase.addEventListener('click', async (e) => {
            try {
                fetch(`http://localhost:5000/posts/${post._id}`, {
                method: 'DELETE'
                })
            }
            catch(error) {
                console.log(btnErase.parentElement);
                console.log(e.target.parentElement);
                e.target.parentElement.innerHTML = error;
            }
        })
    }   
}

async function fetchBlogPosts(tableBody) {
    try {
        let response = await fetch('http://localhost:5000/posts');
        let blogPosts = await response.json();
        return blogPosts;
    }
    catch(error) {
        tableBody.classList.add('error-message');
        tableBody.innerText = error;
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