function printNum(num){
    document.write(num + ' ');
}

function newLine(){
    document.write('<br>');
}

function printLineOfNumbers(size){
    for(var i = 1; i <= size; i++){
        printNum(i);
    }
    newLine();
}

function main(){
    var n = +prompt('please enter a number')

    while(n > 0){
        printLineOfNumbers(n);
        n = +prompt('please enter a number') 
    }
}

main();

