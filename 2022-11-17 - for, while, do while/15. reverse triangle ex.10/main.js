var n = +prompt("Enter a number");
// 4

// for (var i = 1; i <= n; i++) {
//     for (var j = 1; j <= n - i + 1; j++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

for (var i = 1; i <= n; i++) {
    for (var j = n; j >= i; j--) {
        document.write('*')
    }
    document.write('<br>')
}