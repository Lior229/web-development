//print one star
function printStar(){
    document.write('* ');
}

//print new line
function newLine(){
    document.write('<br>');
}

//function - takes in a size, prints stars with length of the size
function printLine(size){
    for(var i =1; i<=size; i++){
        printStar();
    }
    newLine();
}


function printSquare(length){
    for(var i =1; i<=length; i++){
        printLine(length);
    }
}

 var n = +prompt('enter a number');
printSquare(n)
