
function display(){
    const numbers = [12,23,34,45,56,67,78,89,44,88,13]

    const numOfDigits = getNumberOfDigits(12345);

    console.log(numOfDigits)

}



function getNumberOfDigits(num){
   if(num % 10 === num) return 1;

   const remainder = num % 10;

   return 1 + getNumberOfDigits((num - remainder) / 10);
     

}