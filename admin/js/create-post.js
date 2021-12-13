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

    console.log(tags.value);


    try {
        await fetch('http://localhost:5000/posts', {
            method: 'POST',
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

