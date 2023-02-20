
function display(){
    const numbers = [12,23,34,45,56,67,78,89];
    const start = 2; //place holders
    const end = 6; //place holders

    printArray(numbers,start,end);
}



function printArray(arr,startIndex,endIndex){
    if(startIndex > endIndex) return;

    console.log(arr[startIndex])

    printArray(arr,startIndex + 1,endIndex);

}