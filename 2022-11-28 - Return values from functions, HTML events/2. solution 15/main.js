function printStar(){
    document.write('*');
}

function printSpace(){
    document.write('&nbsp;&nbsp;');
}

function newLine(){
    document.write('<br>');
}

function printRectangle(h,w){
    var ast = '';

    var firstIndexH = 0;
    var lastIndexH = h - 1;

    var firstIndexW = 0;
    var lastIndexW = w - 1;

    for(var i = 0; i < h; i++){
        for(var j = 0; j < w; j++){

         if(i === firstIndexH || i === lastIndexH){
                printStar();
         } 
         else if(j === firstIndexW || j === lastIndexW){
            printStar();
          }
        else{
            printSpace();
        }
     }
     newLine();
   }
}

printRectangle(8,20);