
function display(){
    const numbers = [12,23,34,45,56,67,78,89,44,88,13]

    const sum = getSum(123);

    console.log(sum)

}



function getSum(num){
   if(num % 10 === num) return num;
   
   const remainder = num % 10;

   return remainder + getSum((num - remainder) / 10);
     

}