function SumArry(arryOfNum){
    var sum = 0;
    
    for (let index = 0; index < arryOfNum.length; index++) {
        sum += arryOfNum[index];    
    }

    console.log(sum);
    console.log(sum/arryOfNum.length);
}

SumArry([1,2,3,4,5]);

function RandomArry(min, max, arryLength) {

    var arr = [];

    for (let index = 0; index < arryLength; index++) {
        var num = Math.floor(Math.random() * (max - min + 1) + min);
        arr.push(num);
}

    console.log(arr);
    SumArry(arr);
}

RandomArry(1,10,5);

function MaxNum(a, b) {

    if (a >= b) {
        return a;
    } else{
        return b;
    }
}

var num = MaxNum(5, 8);
console.log(num);

function Getcolor(color) {
    switch (color) {
        case "red":
            return("red");
        case "blue":
            return("sky");
        case "green":
            return("grass");
        default:
            return("other color");
    }
}

var color = prompt("enter color");
var ColorDesc = Getcolor(color);

console.log(ColorDesc);