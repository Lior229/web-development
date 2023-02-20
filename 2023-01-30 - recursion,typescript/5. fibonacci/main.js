
function display(){

 
    const fibItem = fibonacci(6);

    console.log(fibItem)



}


// 1 , 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...
// 0   1  2  3  4  5  6    7   8   9   10  


/**
       

        fib(4) ---> 5
        fib(5) ---> 8 
 *      fib(6) ---> 13
 * 
 *   13 =  5   8
     13 =   fib(4) +   fib(5)
 *
 */


        // 6  --> 13
function fibonacci(index){
 if(index <= 1) return 1;
   return fibonacci(index - 2) + fibonacci(index - 1);
 }
