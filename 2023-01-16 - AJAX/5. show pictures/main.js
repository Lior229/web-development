async function showPhotosAsync(start,limit){
   try{

    const url = `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`;
    const response = await fetch(url);
    const photos = await response.json();

       displayPhotos(photos);

   }catch(err){
    console.log(err)
   }
}


function displayPhotos(photos){
    let content = '';
    for(const photo of photos){
        const {title,thumbnailUrl} = photo;
        const tr = `<tr> 
                           <td>${title}</td>
                           <td> <img src="${thumbnailUrl}"/> </td>
                  </tr>`;
        content += tr;
    }
    tableBody.innerHTML = content;
}