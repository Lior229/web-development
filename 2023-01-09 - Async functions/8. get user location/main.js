(() => {

    userLocation.addEventListener('click',() => {

        getUserLocationAfterDelay((lat,long) => {
                console.log(lat,long)
                

                console.log(123)
                //

        });

    })


function getUserLocationAfterDelay(callback){
   
    setTimeout(() => {
    
        navigator.geolocation.getCurrentPosition(position => {
             const latitude = position.coords.latitude;
             const longitude = position.coords.longitude;
             
             callback(latitude,longitude);
        });


        
    },3000);
}



})();












