function firstFn(){
    var m = 0;
    console.log(1)
}
function secondFn(){
    console.log(2)
    thirdFn();
}
function thirdFn(){
    console.log(3)
    fourthFn();
}
function fourthFn(){
    console.log(4)
}

firstFn();
secondFn();



