function test(){

    printStars(10)
}


//1. function signature needs to be the same as a none recursion function (in most cases)
function printStars(n){
  
    // 2. stop condition - when the function must return (end) and not continue
    if (n <= 0) return;


    //3. perform only one step from the entire task
    console.log('* ');

    //4 recursive call with the entire task minus 1 step;
    printStars(n - 1);

    
}


