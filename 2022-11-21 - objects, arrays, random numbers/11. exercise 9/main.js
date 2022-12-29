var min = 500;
var max = 600;

//init array
var randomNumbers = [];
var num = Math.floor(Math.random() * (max - min + 1)  + min);

for(var i = 1; i <= 100; i++){
    randomNumbers.push(num);
}

//calc average 
var sum = 0;

for(var randomNumber of randomNumbers){
    sum += randomNumber;
}

var avg = sum / randomNumbers.length;


