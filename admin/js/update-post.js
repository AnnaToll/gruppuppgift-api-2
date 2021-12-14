let urlParameters = new URLSearchParams(location.search);
    let id = urlParameters.get('id');

let contentTitle    = document.getElementById("Title-input")
let contentAuthor   = document.getElementById("Author-input")
let contentContent  = document.getElementById("content-area")

let contentTags     = document.getElementById("tagSelect")
let Tag1            = document.getElementById("tag1")
let Tag2            = document.getElementById("tag2")
let Tag3            = document.getElementById("tag3")
let Tag4            = document.getElementById("tag4")

function isTagThere(theTag) {
    console.log(theTag)
    for (let i = 5; i>=0; i--){
        if (theTag[i] === `Tag${i+1}`){
            console.log(i+1)
        }
    }
}

try {
     fetch(`http://localhost:5000/posts/${id}`)
     .then(response => response.json())
     .then(data => {
        contentTitle.value          = (data.title)
        contentAuthor.value         = (data.author)
        contentContent.innerHTML    = (data.content)
        isTagThere(data.tags)
        
    });
    
    
} catch(error) {
    console.log(error)
}

const form = document.getElementById("Createpost-form").addEventListener("submit", async (e) =>  {
    e.preventDefault();


    const selected = []
    for (var option of contentTags.options) {
        if (option.selected == true) {
            selected.push(option.value);
        }
    }


    const Title = document.getElementById("Title-input").value
    const Author = document.getElementById("Author-input").value
    const Content = document.getElementById("content-area").value

    const data = {
        "title": Title, 
        "author": Author,
        "content": Content,
        "tags": selected
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

