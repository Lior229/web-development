//console.log(a); // Uncaught ReferenceError: a is not defined

//a = 2; // crash

let a;

a = 3;

console.log(a) // 3



// var isTrue = true;

// if(isTrue){
//     var number = 10;
// }


// console.log(number) // 10


// var isTrue = true;

// if(isTrue){
//     let number = 10;
// }


// console.log(number) // no access - let is block scoped 




// {
//     let number = 20;

//     console.log(number)
// }

let number;


function doSomething(){
 
    
    for(let i = 0; i < 10; i++){
        let num = 1;

    }

    console.log(num)
}



doSomething();

