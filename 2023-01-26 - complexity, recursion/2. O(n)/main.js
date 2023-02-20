function test(){

    function getArray(){
        const arr = [];

        for(let i = 1; i <= 100; i++){
            const num  = Math.floor(Math.random() * 100);
            arr.push(num);
        }

        return arr;
        
    }


   const arrOfNumbers = getArray();



   // O(n)
   function search(arrOfNumbers,numToSearch){
    for(let i = 0; i < arrOfNumbers.length; i++){
        if(arrOfNumbers[i] === numToSearch){
            return i;
        }
    }
    return -1;
   }
   

   const result = search(arrOfNumbers,10);
   console.log(result)


}