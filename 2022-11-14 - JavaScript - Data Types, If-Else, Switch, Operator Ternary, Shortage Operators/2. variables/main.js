var num1 = 10;
var num2 = 20;
var sum = num1 + num2; // 30
var mul = num1 * num2 // 200


//First way to display:
// document.write("num1:", num1, "<br>");
// document.write("num2:", num2, "<br>");
// document.write("sum=", sum, "<br>");
// document.write("mul=", mul, "<br>");


//Second way to display (string concatenation - שרשור)
// document.write("num1: " + "" + num1 + "<br>");
// document.write("num2:" + num2 + "<br>");
// document.write("sum=" + sum + "<br>");

//Third way to display - string interpolation - שיבוץ מילה בתוך טקסט
document.write(`num1: ${num1 + num2} 
one line <br>
second line <br>
third line <br>
`)

document.write(`num2: ${num2} `)
document.write(`mul =  ${mul} `)
document.write('<hr>')