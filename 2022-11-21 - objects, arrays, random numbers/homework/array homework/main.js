function numbers(){
    for (let index = 0; index < 10; index++) {
        document.write(index + "<br>");
        
    }
}


numbers();
document.write("<hr>");

function fun(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    var avg = sum / 3;
    document.write(`sum: ${sum} avg: ${avg}`);
}

fun(3,5,8);
document.write("<hr>");

function displayMessage(message, times)
{
    for (let index = 0; index < times; index++) 
    {
        document.write(message + "<br>");
        
    }

}


var message = prompt("enter message");
var times = prompt("Enter times");

displayMessage(message, times);
document.write("<hr>");