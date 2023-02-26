
function display(){
    const numbers = [12,23,34,45,56,67,78,89,44,88,13]

    const areEven = areNumbersEven([]);

    console.log(areEven)

}



function areNumbersEven(arr){
 if(arr.length === 1) return arr[0] % 2 === 0;
 if(arr[0] % 2 !== 0 ) return false;

 arr.shift(); // remove first value
 return areNumbersEven(arr);



}