
function test(){
    
    doWork(function(a,b,c){
        return {
            sum:a + b + c,
            mul:a * b * c
        }
    });


    // doWork(function(a,b,c){
    //    return a * b * c;
    // });
}



function doWork(cb){
    const result = cb(10,20,30);
    alert(result.sum);
    alert(result.mul)
}
