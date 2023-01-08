
function test(){
    
    doWork(function(num){
        alert(num ** 2); //num * num
    })
}



function doWork(cb){
    cb(10);
    cb(20);
    cb(30);
}
