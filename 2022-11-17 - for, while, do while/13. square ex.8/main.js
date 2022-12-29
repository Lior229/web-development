var n = +prompt("enter width");


// for (var i = 1; i <= n; i++) {
//     for (var j = 1; j <= n; j++) {
//         document.write("*");
//     }

//     document.write("<br>");
// }

//n = 4;

for (i = 1; i <= n * n; i++) {
    document.write("*");
    if (i % n == 0) {
        document.write("<br>");
    }


}