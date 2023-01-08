

function test(){

    doWork((str,count) => {
       for(let i = 1; i<= count; i++){
         console.log(str);
       }
    })

    

    doWork((str,count) => {
        for(let i = 1; i<= count; i++){
             document.write(str + "<br>");
          }
    });

}





function doWork(cb){
    cb('cool',7);
}