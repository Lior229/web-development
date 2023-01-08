
function test(){
    const x = function(){
        alert('hi');
    }

    doSomething(x);

    doSomething(function(){
        alert('hellllllllooo!!!!');
    })
}

function doSomething(cb){
    cb();
}