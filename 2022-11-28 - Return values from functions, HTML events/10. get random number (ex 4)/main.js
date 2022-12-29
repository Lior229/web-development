function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function main(){
    var n1 = getRandomNumber(100,200);
    var n2 = getRandomNumber(200,300);

    console.log(n1);
    console.log(n2)
}

main();