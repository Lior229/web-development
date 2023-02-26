let a = 100;  //value types
let b = a;  //values types


console.log(a) // 100;
console.log(b) // 100;

a = 200;

console.log(a) // 200;
console.log(b) // 100;



// 

let num = 1;


console.log(num) // 1;

init('d');


function init(x) {
    console.log(x);
    x = 123;
    console.log(x);
}


console.log('this is num', num)