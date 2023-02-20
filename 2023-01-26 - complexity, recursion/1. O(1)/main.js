function test(){

    function getArray(){
        const arr = [];

        for(let i = 1; i <= 100; i++){
            const num  = Math.floor(Math.random() * 100);
            arr.push(num);
        }

        return arr;
        
    }


   const arr = getArray();

    // O(1)

    function getNumberAtIndex(index,arr){
        console.log('item at index ' + index + 'is ' + arr[index]);
    }

    getNumberAtIndex(40,arr)



    // const index = +prompt('enter an index');

    // console.log('item at index ' + index + 'is ' + arr[index]);
}