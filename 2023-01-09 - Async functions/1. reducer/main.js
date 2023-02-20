const numbers = [1,7,6,4,9,11,4,9,8,87];


/**
 * if we have no initializer (second argument to the reducer)
 * so first time 
      the acc is the arr[0]
      num is arr[1]
 * 
 */

const sum = numbers.reduce((acc,num) => {
    return acc += num;
});



const obj = numbers.reduce((acc,num) => {
    
    acc[num] = num **2;

    return acc;
},{});





// const arr = numbers.reduce((acc,num) => {
    
//     acc.push(num **2);

//     return acc;
// },[]);


const max = numbers.reduce((calc,num) => calc > num ? calc : num);



console.log(max)










