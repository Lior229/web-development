
function display(){
    const numbers = [12,23,34,45,113,56,67,78,89];
    const start = 2; //place holders
    const end = 8; //place holders

   const max = getMax2(numbers,start,end);

   console.log(max)
}



function maxArray(arr,startIndex,endIndex){
    if(startIndex === endIndex) return arr[endIndex]; 

    const max = maxArray(arr,startIndex + 1, endIndex);

    return arr[startIndex] > max ? arr[startIndex]  : max;

}


function getMax2(arr,startIndex,endIndex){
    if(startIndex === endIndex) return arr[endIndex]; 

    return   (arr[startIndex] > arr[endIndex])
            ?  getMax2(arr,startIndex, endIndex - 1) 
            : getMax2(arr,startIndex + 1, endIndex);
    
}