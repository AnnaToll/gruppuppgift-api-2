let urlParameters = new URLSearchParams(location.search);
    let id = urlParameters.get('id');

let contentTitle = document.getElementById("Title-input")
let contentAuthor = document.getElementById("Author-input")
let contentContent = document.getElementById("content-area")

try {
     fetch(`http://localhost:5000/posts/${id}`)
     .then(response => response.json())
     .then(data => {
        contentTitle.value = (data.title)
        contentAuthor.value = (data.author)
        contentContent.innerHTML = (data.content)
    });
    
    
} catch(error) {
    console.log(error)
}

const form = document.getElementById("Createpost-form").addEventListener("submit", async (e) =>  {
    e.preventDefault();


    const Title = document.getElementById("Title-input").value
    const Author = document.getElementById("Author-input").value
    const Content = document.getElementById("content-area").value

    const data = {
        "title": Title, 
        "author": Author,
        "content": Content
    }

    console.log(JSON.stringify(data))


    try {
        await fetch(`http://localhost:5000/posts/${id}`, {
            method: 'PATCH',
            headers: {
           'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        window.location.replace('index.html')

    } catch(error) {
        console.log(error)
    }
    
    
});

