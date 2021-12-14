let main = document.querySelector('main');

let urlParameters = new URLSearchParams(location.search);
let id = urlParameters.get('id');

async function addContentToMain() {
    let response = await fetch(`http://localhost:5000/posts/${id}`);
    let post = await response.json();

    let date = new Date(post.date);
    let month = convertMonth(date.getMonth());
    let tagsString = post.tags.split(', ');

    main.innerHTML = `
        <h1>${post.title}</h1>
        <section class=".blog-post-info">
            <div>${post.author} </div>
            <div>${date.getDate()} ${month} - ${date.getFullYear()}</div>
        </section>
        <p>${post.content}</p>
        <section class="blog-post-tags-container">
            ${tagsString}
        </section>
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
