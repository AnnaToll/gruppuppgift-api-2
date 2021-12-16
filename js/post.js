let main = document.querySelector('main');

let urlParameters = new URLSearchParams(location.search);
let id = urlParameters.get('id');

addContentToMain();

async function addContentToMain() {
    let response = await fetch(`http://localhost:5000/posts/${id}`);
    let post = await response.json();

    let date = new Date(post.date);
    let month = convertMonth(date.getMonth());

    main.innerHTML = `
    <div style="font-family: Arial;">
        <a href="index.html">Tillbaka till bloggen</a>
        <h2>${post.title}</h2>
        <section class=".blog-post-info">
            <div>Skriven av: ${post.author} </div>
        </section>
        <p>${post.content}</p>
        <section class="blog-post-tags-container">
            <p>${post.tags.join(', ')}</p>
            <div>${date.getDate()} ${month} - ${date.getFullYear()}</div>
        </section>
    </div>
    `;

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
