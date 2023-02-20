function testSync(){

    try{
        const n =  getEventRandomNumber(100);
        alert("even number" + n);

    }catch(err){

        console.log(err.message);

    }

}


function getEventRandomNumber(limit){

    const num = Math.floor(Math.random() * limit );


    if(num % 2 !== 0){
        throw new Error('Failed to generate random number on first try...');
    }
    

   
    return num;

}



