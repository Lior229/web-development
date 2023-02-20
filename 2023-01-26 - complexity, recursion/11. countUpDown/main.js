function test(){

    print1toN(10);

    
}


function print1toN(n){
    if(n < 0) return ;

    
    console.log(n) //count down
       print1toN(n - 1);
      console.log(n) //count up
}
