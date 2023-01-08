function test1(){

    doSomething(sayHi);
    
    function doSomething(fn){
       fn();
    }
    
    function sayHi(){
        alert('Hi');
    }

}

function test2(){

    doSomething2(getSomethingCool);


    function doSomething2(fn){
       const result = fn();
       alert(result);
     }

     function getSomethingCool(){
       return 'something cool';
     }
     

}

function test3(){

    doSomething3(displayMessage);

    function doSomething3(fn){
        const count = 5;
        const message = 'hello world';
        fn(message,count);
    }

    function displayMessage(message,count){
        for(let i = 1; i <= count; i++){
            console.log(message);
        }
    }
}







