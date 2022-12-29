//first way
function getMax(a,b){
    var max;
    if(a > b){
        max = a;
    }else{
        max = b;
    }
    return max;
}

//second way
function getMax(a,b){
    if(a > b){
        return a;
    }
    return b;
}


//third way 
function getMax(a,b){
    return (a > b) ? a :b;
}

function main(){

    
    var max1 = getMax(3,5);
    var max2 = getMax(11,8);

    console.log('max1:', max1);
    console.log('max2:', max2);

}

main();

