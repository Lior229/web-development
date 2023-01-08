

function displayVat(){
    try{
        const price = +prompt("enter your price");
        const percent = +prompt("enter vat percent");
        const vat = getVat(price,percent);
        alert(vat);
    }
    catch(err){
        alert(err.message);
    }
}


function getVat(price,percent){

    if(price < 0){
        throw new Error("price cant be negative!!");
    }
    if(percent < 0 || percent > 100){
        throw new Error("percent must be 0 to 100");
    }

    const vat = price * percent / 100;
    return vat;
}

displayVat();