function printDollar(){
    document.write('$ ');
}

function printNewLine(){
    document.write('<br>');
}

function printLine(size){
    for(var i = 1; i <= size; i++){
        printDollar();
    }
    printNewLine();
}


function printTriangle(height){
    for(var i = 1; i <= height; i++){
      printLine(i);
    }
    printNewLine();
}


function printManyTriangles(count){
    for(var i = 1; i <= count; i++){
        printTriangle(i);
    }
}

function main(){
    var n = +prompt('enter a number');
    printManyTriangles(n);
}

main();