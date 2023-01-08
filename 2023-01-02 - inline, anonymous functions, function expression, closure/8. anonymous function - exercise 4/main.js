
function test(){
    doWork(function(){
        alert('vladi')
    })
}



function doWork(cb){
    cb();
    cb();
    cb();
}
