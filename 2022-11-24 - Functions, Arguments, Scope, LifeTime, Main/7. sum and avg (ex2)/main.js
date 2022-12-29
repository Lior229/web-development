function sumAndAvg(num1,num2,num3){
  var mul = num1 * num2 * num3;
  var avg = (num1 + num2 + num3) / 3;
  document.write(`mul: ${mul} <br>`);
  document.write(`avg: ${avg} <br>`);
}

sumAndAvg(1,2,3);
sumAndAvg(4,5,6)

var num1 = +prompt("enter your first number");
var num2 = +prompt("enter your second number");
var num3 = +prompt("enter your third number");

sumAndAvg(num1,num2,num3);