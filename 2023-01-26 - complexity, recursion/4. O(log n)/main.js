function test(){

    const arr = [];

    for(let i = 0; i <= 100; i++){
        const num = Math.floor(Math.random() * 100);
        arr.push(num);
    }

    // if a is negative - return a;
    // if b is positive - return b;
    //if equal a and b = return 0;

    arr.sort((a,b) => {
        return a -b;
    });


    const result = binarySearch(arr,25);

    console.log(result)


}

//array must be sorted (O(log n))


function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return -1;
}




