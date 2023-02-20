function coldColor(){

    getRandomColdColorAfterDelay((color) => {
       console.log('success - cold color' + color);
    },(err) => {
        console.log( err.message )
    })

}



function getRandomColdColorAfterDelay(successCallback,errorCallback){
    setTimeout(() => {
         const colors = ['red','yellow','orange','green','blue','purple'];
         const index = Math.floor(Math.random() * colors.length);
         const color = colors[index];

         //if(color === 'red')...
         if(color === 'blue' || color === 'green' || color === 'purple'){
            errorCallback(new Error('this is a hot color'));
            return
         }
         successCallback(color);

    },3000);
}