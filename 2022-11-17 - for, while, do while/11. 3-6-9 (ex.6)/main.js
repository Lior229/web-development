var n = +prompt("enter a number");

for (i = 3; i <= n; i++) {
    if (i % 3 === 0) {
        document.write(i);
    }
}

for (i = 3; i <= n; i += 3) {
    document.write(i);
}