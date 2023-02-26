// variables
var a;
a = 100;
//a = true // error
//a = 'hello'
var b;
b = 'hello';
// b = 300; // error;
var d; // Union Type
d = 100;
d = "hi";
d = new Date();
//d = true; // error;
var f;
// functions
var f1 = function (x, y) {
    console.log(x);
    console.log(y);
    return true;
};
var fn = function (x, y) {
    console.log(x);
    console.log(y);
};
document.write("Add" + add(10, 20) + '<br>');
document.write("Add" + sub(10, 20) + '<br>');
document.write("Add" + mul(10, 20) + '<br>');
document.write("Add" + div(10, 20) + '<br>');
