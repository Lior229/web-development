function getMinValueIndex(numArr){
    var arrLength = numArr.length; //8 
    var min = numArr[0];
    var ind = 0;

    for(var i = 0; i < arrLength; i++){
        if(i === 0) continue;
    
        var number = numArr[i];
        if(number < min){
            min = number; //1
            ind = i;
            
        }
    }

    return ind;
}

const arrayOfNumbers = [9,5,6,100,1,102,3,2];

console.log(getMinValueIndex(arrayOfNumbers))