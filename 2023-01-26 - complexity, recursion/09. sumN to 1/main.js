function test(){

    const sum = sum1toN(10);

    console.log(sum)
    
}


function sum1toN(n){
    if(n <= 1) return n;

    return n + sum1toN(n - 1);
}
