var movie = {
    name:"good movie",
    description:"good description",
    length:90,
    director:"Assaf"
}

for(var field in movie){
     //string concat

     document.write(field + ':' + '' + movie[field] + '<br>');


    //string interpolation 
    document.write(`${field} : ${movie[field]} <br> `)
}


