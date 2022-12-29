var n = +prompt("enter a number");
//4


// for (var i = 1; i <= n; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write('*');
//     }
//     document.write('<br>')
// }

for (var i = 1; i <= n; i++) {
    
    for (var j = i; j > 0; j--) {
        document.write('*');
    }
    document.write('<br>')
}