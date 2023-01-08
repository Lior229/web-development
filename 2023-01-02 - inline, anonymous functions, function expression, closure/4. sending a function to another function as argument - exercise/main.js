
function test(){
    displayResult(getSummary);
    displayResult(getAverage)
}


function displayResult(cb){
    const result = cb([10,20,30]);
    console.log(result);
}


function getSummary(arr){
    let sum = 0;
    for(const num of arr){
        sum += num;
    }
    return sum;
}

function getAverage(arr){
    let sum = 0;
    for(const num of arr){
        sum += num;
    }
    return sum / arr.length;
}