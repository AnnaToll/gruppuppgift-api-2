addBlogPosts(); 

let shortenedText = ''
async function addBlogPosts() {
    const tableBody = document.getElementById("tbody")

    try {
    let response = await fetch('http://localhost:5000/posts')
    let Posts = await response.json();
    console.log(Posts)

    
    tableBody.innerHTML = '';

    for (let post of Posts) {
        let date = new Date(post.date),
            month = changeMonth(date.getMonth()),
            tableBodyContent = document.createElement('div')
            tagsContent = document.createElement('div')

        tableBody.append(tableBodyContent);

        if(post.tags.length == 0) {
            tagsContent.innerHTML = 'Inga taggar';

        } else {
            let tagsList = document.createElement('ul');
            for (let tag of post.tags) {    
                let listItem = document.createElement('li');
                listItem.innerHTML = tag;
                tagsList.append(listItem);
            }
            tagsContent.append(tagsList);
        }

        tableBody.innerHTML += `
        <div style = "border-top: 1px solid black; font-family: Arial; padding-bottom: 20px;">
        <h3>Titel: ${post.title}</h3>
        <p>Skriven av: ${post.author}</p>
        <p>${shortenContent(post.content)}</p>
        <a href="post.html?id=${post._id}" target="_blank">läs mer</a>
        <p> ${post.tags.join(', ')}</p>
        <div>${date.getDate()} ${month} - ${date.getFullYear()}</div>
        </div>
        `

    }

    } catch(error) {
        console.log(error);
    }

}

function changeMonth(month) {
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

function shortenContent(str) {
    if (str.length>=100){
        str=str.slice(0,100)
        str+='...'
    }
    return str
}
