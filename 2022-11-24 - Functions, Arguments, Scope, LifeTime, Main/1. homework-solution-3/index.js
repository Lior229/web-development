var min = 1;
var max = 100;
var arrayLength = 100;

//init array
var randomNumbers = [];

// first run (100 iterations )

for(var i = 0; i < arrayLength; i++){
    var randomNumber = Math.floor(Math.random() * (max - min + 1)  + min);
    randomNumbers.push(randomNumber);
}

for(var i = randomNumbers.length - 1; i >= 0; i--){
     document.write(`${randomNumbers[i]} |`)
}


// second run (100 iterations )

// var randReverse = randomNumbers.reverse();


// third run (100 iterations )

// for(var j = 0; j < randReverse.length; j++){
//     document.write(`${randReverse[j]} |`)
// }




