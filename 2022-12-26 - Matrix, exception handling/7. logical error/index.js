function displayPI(){
    //3.141592653589793
    try{
        const digits =  +prompt("enter number of digits");
        const pi = Math.PI.toPrecision(digits);  
        alert("pi" + pi);
        return;
    } catch(err){
        console.log(err.message)
    }finally{
        console.log('done')
    }
    
}



displayPI();