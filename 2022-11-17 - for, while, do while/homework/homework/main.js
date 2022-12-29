
// ⦁	קילטו מהמשתמש מספר n, הציגו את כל המספרים המתחלקים ב-3 ללא שארית, מ-1 ועד n


// var n = +prompt("please enter a number");

// for (let i = 0; i <= n; i=i+3) {
//     if (i % 3 === 0) {
//         document.write(i + "<br>")
//     }
//   }

// ⦁	קילטו מהמשתמש שני מספרים, הציגו את כל המספרים ביניהם בסדר יורד. אין להניח שהראשון קטן מהשני.

// var num1 = +prompt("please enter a number 1");
// var num2 = +prompt("please enter a number 2");
// var max = num1>=num2 ? num1 : num2 ;
// num1 = num1 === max ? num2 : num1 ;

// for (let i = max; i >= num1; i--) {
//         document.write(i + "<br>");
// }


// .0	קילטו מהמשתמש 100 מספרים, הציגו את סכומם ואת הממוצע.

// var sum = 0;
// var num = 0;

//  for (let i = 0; i <= 5; i++) {
//     num = +prompt("please enter a number");
//     sum += num;
//    }

//    document.write("sum: " +sum);
//    document.write("<br>avg: "+ (sum/5));

// .2	קילטו מהמשתמש מספרים שוב ושוב, עד שמכניס מספר שלילי. הציגו כמה מספרים זוגיים נקלטו.

// var num;
// var count = 0;

// do {
//     num = +prompt("please enter a number");
//          if (num % 2 === 0) {
//          count++;
//      }
// } while (num > 0);

// document.write("counter: " +count);

// .3	אתגר: קילטו מהמשתמש מספר, הציגו את סכום הספרות שלו.
// לדוגמה, אם המשתמש הכניס: 8415 יש להציג 18 כי זה סכום הספרות. 
//  var num = +prompt("please enter a number");
//  var sum = 0;

//  while (num >= 1){
//     sum = sum + (num % 10);
//     document.write("<br> sum: " +sum);
//     num = (num - (num % 10)) / 10;
//     document.write("<br> num: " +num);
//  }
 
//  document.write("<br> sum:" +sum);

// var num = +prompt("please enter a number");

// for (let index = 0; index < num; index++){
//     document.write("<br>");

//     for (let index2 = 0; index2 < num; index2++){
//         document.write("*");
//     }
// }

var length = +prompt("please enter a Length");
var width = +prompt("please enter a width");


 for (let index = 0; index < width; index++){
     document.write("<br>");

     for (let index2 = 0; index2 < length; index2++){
         document.write("*");
     }
 }