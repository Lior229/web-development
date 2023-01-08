function displayPi(){
    try{
        const digits = +prompt("enter a number");
        const pi = Math.PI.toPrecision(digits);
        alert(pi);
        return
    }
    catch(err){
        console.log(err.message);
    }finally{
        console.log('done')
    }

}

displayPi();