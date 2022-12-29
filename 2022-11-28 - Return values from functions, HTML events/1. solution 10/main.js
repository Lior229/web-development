function sumArray(arrayOfNumbers){
    var sum = 0;
    var avg = 0;
    var arrLength = arrayOfNumbers.length; // length of the array

    for(var i = 0; i < arrLength;i++){
        sum = sum + arrayOfNumbers[i];
    }

    avg = sum / arrLength;

    console.log(avg)

}

function createRandomNumbers(min,max,maxArrayLength){

    var arr = [];

        for( var i = 0; i < maxArrayLength; i++){
            var num = Math.floor(Math.random() * (max - min + 1)  + min);
            arr.push(num);
        }

        console.log(arr)
        sumArray(arr);


}


createRandomNumbers(100,200,20);



//sumArray([1,2,3,4,5,7]); // execution with hard coded pre defined array

