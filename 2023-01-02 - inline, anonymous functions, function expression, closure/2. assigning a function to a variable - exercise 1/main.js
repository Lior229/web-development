function test(){
    const func = getAverage;
    const avg = func(4,6,7);
    alert(avg);
}


function getAverage(a,b,c){
    const sum = a + b + c;
    const avg = sum / 3;
    return avg;
}