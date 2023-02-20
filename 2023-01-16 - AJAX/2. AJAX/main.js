

async function displayHTML(){
    try{
        const url = "https://www.manutd.com/";
        const response = await fetch(url);
        const html = await response.text(); // for getting back HTML
        containerDiv.innerHTML = html;
    }catch(err){
        console.log(err)
    }
}

async function displayJson(){
    try{
        const url = 'https://jsonplaceholder.typicode.com/comments';
        const response = await fetch(url);
        const comments = await response.json();
        
        console.log(comments)
        
        // Display in <ul> emails and names
        let content = "";
        for(const comment of comments){
            const li = `<li>${comment.email} -> ${comment.name}</li>`;
            content += li;
        }

        ulComments.innerHTML = content;


    }catch(err){
        console.log(err)
    }
}


