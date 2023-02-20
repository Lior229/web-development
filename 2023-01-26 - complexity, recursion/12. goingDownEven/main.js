function test(){

    goingDownEven(10);

    
}


function goingDownEven(n){
    if(n < 0) return 0;

    if(n % 2 === 0){
        console.log(n);
    }

    goingDownEven(n - 1);


}