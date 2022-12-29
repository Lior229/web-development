var fruits = ['Apple','Banana','Peach','Grapes','Orange'];
document.write(fruits[0] + '<br>');
document.write(fruits[1] + '<br>');
document.write(fruits[2] + '<br>');
document.write(fruits[3] + '<br>');
document.write(fruits[4] + '<br>');


fruits[2] = 'Lemon';


document.write(fruits[2] + '<br>');

document.write('array length is:' + '' + fruits.length);

fruits.push('Orange2');

console.log(fruits)