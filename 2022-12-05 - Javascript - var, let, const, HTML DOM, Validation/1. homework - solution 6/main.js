function isPrime(num){
    if(num === 1 || num === 0) return false;

    if(num < 0){
       num = -num;
    }

    var limit = Math.sqrt(num);

    
    for(var i = 2; i <= limit; i++){
        if(num % i === 0){
            return false;
        }
    }

    return true;
}


