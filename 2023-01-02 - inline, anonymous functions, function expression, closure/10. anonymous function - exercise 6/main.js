
function test(){
    
    doWork(function(a,b,c){
        alert(a + b + c);
    })
}



function doWork(cb){
    cb(10,20,30);
    cb(30,40,50);
    cb(50,60,70);
}
