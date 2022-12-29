var a = "hello";
console.log(a, typeof a) //string

var b = 123;
console.log(b, typeof b); //number


var c = 123.456;
console.log(c, typeof c); //number

var d = true;
var e = false;

console.log(d, e, typeof d, typeof e);

var f = new Date();
console.log(f, typeof f);

//-----------/
var d2 = null;
console.log(d2, typeof d2);

var g = 10 * "hello";
console.log(g, typeof g)



var x = null;
var y;

console.log(y) // undefined

console.log(x == y); // true abstract comparison 
console.log(x === y) // strict comparison 
console.log('3' == 3)// true 
console.log('3' === 3)// false

var x = ""; //sting
