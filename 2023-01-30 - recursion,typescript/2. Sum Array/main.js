
function display(){
    const numbers = [12,23,34,45,56,67,78,89];
    const start = 2; //place holders
    const end = 7; //place holders

   const sum = sumArray(numbers,start,end);

   console.log(sum)
}



function sumArray(arr,startIndex,endIndex){
    if(startIndex === endIndex) return arr[endIndex]; 

    const sum = sumArray(arr,startIndex + 1, endIndex);

    return arr[startIndex] + sum;

}