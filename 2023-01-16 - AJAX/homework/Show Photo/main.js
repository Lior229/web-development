$(() => {

    const PHOTO_URL = "https://jsonplaceholder.typicode.com/photos?albumId=1";

    $.ajax({
        url: PHOTO_URL,
        success: function (photos) {
            // console.log(photos);

            // const photo = {id, title, url, thumbnailUrl} ;
            displayPhotos(photos)

        },
        error: (err) =>  {
            console.log(err);
      }
    });

        function displayPhotos(photos) {

            console.log(photos);

            let imgContiner =""

            photos.forEach( photo => {

                imgContiner += `
                    <div class="imgCard">
                        id: ${photo.id},
                        <br>
                        title: ${photo.title},
                        <br>
                        <img src="${photo.thumbnailUrl}">
                    </div>
            `

            });

            $('#imgContiner').html(imgContiner);

            
        }
    }
)