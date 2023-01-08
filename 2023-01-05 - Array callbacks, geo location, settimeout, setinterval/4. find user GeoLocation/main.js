function userGeoLocation(){
    
    // get user location once

    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`latitude:${latitude}    longitude${longitude}`)

    })

    // get user location many times

    navigator.geolocation.watchPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude)
    })



    console.log(123)

}





