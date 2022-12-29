/************************************** 1 **************************************/

function sayThingsGoRight() {
  document.write("make things go right");
  document.write("<br/>");
}

// sayThingsGoRight();
// sayThingsGoRight();
// sayThingsGoRight();

//or

for (var i = 0; i < 3; i++) {
  sayThingsGoRight();
}

/************************************** 2 **************************************/
//same as 1

/************************************** 3 **************************************/

function printStr(str) {
  for (var i = 0; i < 10; i++) {
    document.write(str);
    document.write("<br/>");
  }
}

//printStr('hello world');

var someStr = prompt("Say what you have to say");

printStr(someStr);

/************************************** 4 **************************************/

function printMsg(str, printCount) {
  for (var i = 0; i < printCount; i++) {
    document.write(str);
    document.write("<br/>");
  }
}

var someStr = prompt("Say what you have to say");
var count = +prompt("how many times it should run?");

printMsg(someStr, count);

/************************************** 5  **************************************/
function printSum(num1, num2, num3) {
  var sum = (num1 + num2 + num3) / 3;
  document.write(sum);
}

// var _num1 = +prompt('first num is')
// var _num2 = +prompt('second num is')
// var _num3 = +prompt('third num is')

var min = 20;
var max = 70;
var _num1 = Math.floor(Math.random() * (max - min + 1) + min);
var _num2 = Math.floor(Math.random() * (max - min + 1) + min);
var _num3 = Math.floor(Math.random() * (max - min + 1) + min);

printSum(_num1, _num2, _num3);


/************************************** 12  **************************************/


function printSquare(n) {
  for(var i = 1; i <= n**2; i++) {
     printStar()
     if(i % n === 0){
         newLine();
     }
  }

}

function newLine() {
  document.write("<br>");
}

function printStar() {
  document.write("*");
}


printSquare(9);

/************************************** 13  **************************************/

function printLine(n, repeat = 0) {
  for (var i = 1; i <= repeat; i++) {
    for (var j = 1; j <= n; j++) {
      printStar();
    }
    newLine();
  }
}
function newLine() {
  document.write("<br>");
}

function printStar() {
  document.write("*");
}

const drawrRectangle = (width, height) => {
  printLine(width, height);
};

drawrRectangle(6, 4);


/************************************** 14  **************************************/

function drawMultipleRectangle (count){
  for(var i = 1; i <= count; i++) {
    drawrRectangle(6,4);
    newLine();
  }
    
}


/************************************** 15  **************************************/

function printStar() {
  document.write("*");
}

function printSpace() {
  document.write("&nbsp;&nbsp;"); // HTML Entities - nbsp = Non Breakable SPace
}

function newLine() {
  document.write("<br>");
}

function printRectangle() {
  const w = 14;
  const h = 7;
  let ast = "";

  const firstIndexH = 0;
  const lastIndexH = h - 1;

  const firstIndexW = 0;
  const lastIndexW = w - 1;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (i === firstIndexH || i === lastIndexH) {
        printStar();
      } else if (j === firstIndexW || j === lastIndexW) {
        console.log(j);
        printStar();
      } else {
        printSpace();
      }
    }
    newLine();
  }
}

printRectangle();

/************************************** 16  **************************************/

function countBackWards(n) {
  for (var i = n; i > 0; i--) {
    document.write(i + " ");
  }
}

/************************************** 17  **************************************/

function createInvertedTriangle(size) {
  for (var i = size; i > 0; i--) {
    for (var j = i; j > 0; j--) {
      document.write(j);
    }
    document.write("<br/>");
  }
}

/************************************** 18 **************************************/

function printNumbers(n) {
  for (var i = 1; i <= n; i++) {
    document.write(i + " ");
  }
}

function printStars(n) {
  for (var i = 1; i <= n; i++) {
    document.write("* ");
  }
}

function printLine(n) {
  printNumbers(n);
  printStars(n);
  document.write("<br>");
}

function printTriangle(n) {
  for (var i = n; i >= 1; i--) {
    printLine(i);
  }
}

function main() {
  printTriangle(4);
}

main();

/************************************** 19 **************************************/

function createInvertedTriangle(size) {
  for (var i = size; i > 0; i--) {
    for (var j = i; j > 0; j--) {
      document.write("*");
    }
    document.write("<br/>");
  }
}

function createTriangle(size) {
  for (var i = 1; i <= size; i++) {
    for (var j = 0; j < i; j++) {
      document.write("*");
    }
    document.write("<br/>");
  }
}

createInvertedTriangle(5);
createTriangle(5);
