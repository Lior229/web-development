function test1(){
    console.log('...start');
    doWork1();
    console.log('...end');
}

function doWork1(){
    console.log("A");
    setTimeout(() => {
        console.log("doing some work 3 sec"); //async
    },3000); //will wait 3 sec 
    setTimeout(() => {
        console.log("doing some work  0"); //async
    },0); // goes to the end of the task queue
    console.log("b");
}


function test2(){
    console.log("start...");
     doWork2((x) =>{
        para.innerText = x
        return 123;
     }); // async function

    console.log("end")
}

function doWork2(callback){
    let answer = 0
    console.log('A');

    setTimeout(() => {
       console.log('doing some extra work...');
       answer = 42;
       const result = callback(answer);
    },5000);

    console.log("b");
    return answer;

}







// not the right way to handle async returns

// function doWork2(){
//     let answer = 0
//     console.log('A');

//     setTimeout(() => {
//        console.log('doing some extra work...');
//        answer = 42;
//     },100);

//     console.log("b");
//     return answer;

// }

// async with callback
