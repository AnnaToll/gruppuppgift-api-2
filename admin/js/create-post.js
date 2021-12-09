
let form = document.getElementById("Createpost-form")

window.onload = function() {

form.addEventListener("submit", async function(e) {
    e.preventDefault;

let formdata = new FormData(form);
formdataObject = {
    "title": formdata.get("Title"),
    "author": formdata.get("Author"),
    "content": formdata.get("Content"),
}


    //console.log(JSON.stringify(formdataObject))
    

    try {
        await fetch(' '), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdataObject),
        }

       location.replace('index.html')

    } catch(error) {
        console.log(error)
    
    
    }
});
}