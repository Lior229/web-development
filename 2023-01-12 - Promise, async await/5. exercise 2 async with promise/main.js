function coldColor(){

    console.log('start running')

    getRandomColdColorAfterDelay().then(function(color){
        console.log(color)
        
    }).catch(function(err){
        console.log(err)

        ///
    });

    
    console.log('end...')

}


function getRandomColdColorAfterDelay(){
    return new Promise((resolve,reject) => {

        setTimeout(() => {
            const colors = ['red','yellow','orange','green','blue','purple'];
            const index = Math.floor(Math.random() * colors.length);
            const color = colors[index];
   
            //if(color === 'red')...
            if(color === 'blue' || color === 'green' || color === 'purple'){
                reject(new Error('this is a hot color'));
               return
            }
            resolve(color);
   
       },3000);


    });
}