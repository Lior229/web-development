
function display(){
    const numbers = [12,23,34,45,56,67,78,89,113];
    const start = 2; //place holders
    const end = 8; //place holders
    const numToSearch = 78;

   const index = binarySearch(numbers,start,end,numToSearch);

   console.log(index)


}



function binarySearch(arr,startIndex,endIndex,numToSearch){
    if(startIndex > endIndex) return -1;
    const middle = Math.floor((startIndex + endIndex ) / 2);
    if(arr[middle] === numToSearch) return middle; 

    if(numToSearch < arr[middle]){
        return binarySearch(arr,startIndex,middle - 1, numToSearch);
    }else{
       return binarySearch(arr,middle + 1,endIndex,numToSearch)
    }

}


