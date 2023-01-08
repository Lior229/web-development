function test(){
   const x = sayHi();
   console.log(x);

   const y = sayHi;
   const z = y();
   console.log(z)
   
}

function sayHi(){
    // alert('hi');
    return 123;
}