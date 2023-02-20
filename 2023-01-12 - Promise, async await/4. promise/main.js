
function display(){
     getEvenRandomNumberAfterDelay(100).then((result) => {
        console.log('result',result);
     }).catch((err) => {
        console.log('err',err);
     })

 
}

function getEvenRandomNumberAfterDelay(limit){
    return new Promise((resolve,reject) => {

        setTimeout(() => {

            const num = Math.floor(Math.random() * limit);

            //failed
            if(num % 2 !== 0){
                const err  = new Error('Failed to generate a random number...')
                reject(err);
                return;
            }

            resolve(num);

        },3000);
    });
}





// with functions declarations 



function promiseInvoker(resolve,reject){
  setTimeout(function(){

           //failed
           if(num % 2 !== 0){
            const err  = new Error('Failed to generate a random number...')
            reject(err);
            return;
        }
    
        resolve(num);



  },3000);
}

function getEvenRandomNumberAfterDelay(){
    return new Promise(promiseInvoker);
}



const promise = getEvenRandomNumberAfterDelay();

function onSuccess(response){
    console.log('response',response)
}

function onError(err){
    console.log(err)
}

promise.then(onSuccess).catch(onError);




