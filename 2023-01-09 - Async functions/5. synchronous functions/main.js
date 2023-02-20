function test1(){
    console.log('...start');
    doWork1();
    console.log('...end');
}

function doWork1(){
    console.log("doing some work...");
}


function test2(){
    console.log('....start');
    const result = doWork2();
    console.log('result=' + result);
    console.log('end....')
}

function doWork2(){
    console.log('doing some work 2');
    return 42;
}