function filter(){

    const arr = [12,23,34,45,56,67,68,89,93,13,24,46];


    // const evens = [];

    //find all even numbers and push them into events array

    // for(const num of arr){
    //     if(num % 2 === 0){
    //         evens.push(num);
    //     }
    // }


    // const evens = arr.filter((num) => {
    //      return num % 2 === 0;
    // });

    // regular function 
    // const evens = arr.filter(function(num){
    //     return  num % 2 === 0;
    // } );
    
    //arrow function
    // const evens = arr.filter( (num) => num % 2 === 0 );


    const filterHandler = (num) => {
        return num % 2 === 0;
    }
    
//    const evens = arr.filter(filterHandler);


 const evens = customFilter(arr,filterHandler);

 console.log(evens)

}


function customFilter(arrayToFilter,callback){
    const filteredArray = [];

    for(const num of arrayToFilter){
        if(callback(num)){
            filteredArray.push(num);
        }
    }

    return filteredArray;
}

