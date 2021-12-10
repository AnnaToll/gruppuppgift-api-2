const form = document.getElementById("Createpost-form").addEventListener("submit", async (e) =>  {
    e.preventDefault;
/*
    let formdata = new FormData(form);
    formdataObject = {
    "title": formdata.get("Title"),
    "content": formdata.get("Content"),
    "author": formdata.get("Author"),
  }

    console.log(JSON.stringify(formdataObject))
    */


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
        await fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
           'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

    } catch(error) {
        console.log(error)
    } 
});
