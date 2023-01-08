function displayPi(){

    try{
        const digits = +prompt("enter a number");
        const pi = getPi(digits);
        alert(pi);
    }
    catch(err){
        console.log(err.message);
    }finally{
        console.log('done')
    }

}

displayPi();

function getPi(digits){
    const originalPI = Math.PI;
    const customPI = originalPI.toPrecision(digits);
    return customPI;
}