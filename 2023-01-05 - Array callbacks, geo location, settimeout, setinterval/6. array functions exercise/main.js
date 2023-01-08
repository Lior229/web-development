function arrayCallbacks(){
    const arr = [];

    for(let i = 1; i <= 100; i++){
        const num = Math.floor(Math.random() * 101);
        arr.push(num);
    }

    document.write( arr + '<hr>')

    //numbers higher then 80 (using filter);
    const numbersHigherThen80 = arr.filter((num) => num > 80 );
    document.write("over 80 " + numbersHigherThen80 + '<hr>')
   
    //odd and less then 50
    const numbersOddAndLessThen50 = arr.filter((num) => (num < 50) && (num % 2 !== 0));
    document.write("odd and less then 50 " + numbersOddAndLessThen50 + '<hr>')

    // find the first even number which is higher then 50
    const firstNumberOddHigherThen50 = arr.find((num) => (num > 50) && (num % 2 === 0));
    document.write("firstNumberOddHigherThen50 " + firstNumberOddHigherThen50 + '<hr>')

    // find the first even number which is higher then 50 (our custom find)
    const customFindHigherThen50 = customFind(arr,(num) => (num > 50) && (num % 2 === 0) )
    document.write("customFindHigherThen50 " + customFindHigherThen50 + '<hr>')

    //find the index of the first odd number which is higher then 80

    const firstIndexHigherThen80 = arr.findIndex((num) => (num > 80) && (num !== 0) );

    document.write("firstIndexHigherThen80 " + firstIndexHigherThen80 + '<hr>')

    arr.forEach( num => document.write(num + " | ") );

    // display new array with square roots
    const squareRoots = arr.map( num  => num ** 2);

    document.write("squareRoots " + squareRoots + '<hr>')

    const multi5 = customMap(arr,(num) => {
        return {
            name:'yuval',
            age:num * 5
        }
    });

    const arrStrings = arr.map((num) => {
        return (num % 2 === 0) ? {num,kind:'even',isEven:true} : {num,kind:'odd',isEven:false}
    });
  
    //instead of writing 3 separate functions, we can use 1

    // const firstArray =  arr.filter((num) => num % 2 === 0);
    // const secondArray = firstArray.map((evenNumber) => evenNumber ** 3 );
    // const thirdArray = secondArray.forEach(num => {
    //    if(num < 400){
    //        console.log(num)
    //    }
    // })


    //שרשור פונקציות

    //  arr.filter((num) => num % 2 === 0).map((evenNumber) => evenNumber ** 3 ).forEach(num => {
    //     if(num < 400){
    //         console.log(num)
    //     }
    //  })



}



function customFind(arr,callback){

    let item = null;

    for(let i = 0; i < arr.length; i++){

        const wasFound = callback(arr[i]);
        item = arr[i];
        if(wasFound) break;
    }

    return item;
}

function customMap(arr,callback){

    const mappedArray = [];
    
    arr.forEach(item => {
        const newItem = callback(item);
       mappedArray.push(newItem);
    })

    return mappedArray;

}