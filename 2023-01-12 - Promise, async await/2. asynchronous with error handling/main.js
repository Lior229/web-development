
//1.  without throwing an error ( using callbacks to catch success and error);

function testAsyncWithoutThrowing(){

// getEvenRandomNumberAfterDelay(100,function(){
//     //first block of code
// }, function(){
//     //second block of code 
// });


getEvenRandomNumberAfterDelayWithout(100,  num => console.log('even number ' + num)  , (err) => console.log(err.message))

    
}
    
function getEvenRandomNumberAfterDelayWithout(limit,successCallback,errorCallback){

    setTimeout(() => {

        const num = Math.floor(Math.random() * limit);

        //failed 
        if(num % 2 !== 0){
            const err =  new Error('Failed to generate random number on the first try');
            errorCallback(err);
            return;
        }

        successCallback(num);

    },3000);
    
}



//2. with throwing an error - this code design wont work 

function testAsyncWithThrowing(){

    try{
        getEvenRandomNumberAfterDelayWith(100, num => console.log('this is your even number' + num));

    }catch(err){
      console.log(err.message)
    }
    
}


function getEvenRandomNumberAfterDelayWith(limit,successCallback){

    setTimeout(() => {

        const num = Math.floor(Math.random() * limit);

        //failed 
        if(num % 2 !== 0){
            throw new Error('Failed to generate random number on the first try');
        }

        successCallback(num);

    },3000);
    
}
