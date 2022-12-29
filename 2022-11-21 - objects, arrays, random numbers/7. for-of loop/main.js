var fruits = ['Apple','Banana','Peach','Grapes','Orange'];

//fruits length = 5;

for(var i = 0; i < fruits.length ; i++){
    document.write('index = ' + ' ' + i + ' ' + fruits[i] + '<br>')
}

document.write('<hr>');

for(var fruit of fruits){
   document.write('my fruit is: ' + ' ' + fruit + '<br>')
}