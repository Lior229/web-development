
function getFunction(){
    const x = function sayHi(){
        alert('hi');
    };

    return x;
}



function test(){
    const x = function sayHi(){
        alert('hi');
    };

    //sayHi(); // cant execute sayHi as it not exist
   // x();// executing my function expression 



    doSomething(x);
    doSomething(function sayHello(){
        alert('hello')
    })




    // const y = getFunction();

    // y();
}




function doSomething(cb){
    cb();
}