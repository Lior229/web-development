
function test(){
    displayResult(function getSummary(arr){
        let sum = 0;
        for(const num of arr){
            sum += num;
        }
        return sum;
    });
    
    displayResult(function getAverage(arr){
        let sum = 0;
        for(const num of arr){
            sum += num;
        }
        return sum / arr.length;
    })
}





function displayResult(cb){
    const result = cb([10,20,30]);
    console.log(result);
}
