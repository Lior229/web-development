// prints one star
function printStar(){
    document.write('* ');
}

//prints new line
function newLine(){
    document.write('<br>');
}

//print one line of stars with length of size
function printLine(size){
 for(var i =1; i <= size; i++){
    printStar();
 }
 newLine();
}


function printTriangle(lines){
    for(var i =1; i <= lines; i++){
        printLine(i);
    }
}

//get user value - print triangle 

var n = + prompt("enter a number");

printTriangle(n);