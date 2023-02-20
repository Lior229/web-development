async function coldColor(){


    const num = await getRandomColdColorAfterDelay();


    try {
        const num = await getRandomColdColorAfterDelay();



    }catch(err){

        console.log(err)

    }



}







// one way to extract the value from the promise

// const something = coldColor();
// something.then((result) => {
//     console.log(result)
// }).catch()

// console.log(something)

// a second way to extract the value from the promise (using async await)

// async function anotherFunction(){
//     const something = await coldColor();
//     console.log(something)
// }


// anotherFunction();



// const coldColorArrow = async () => {

// }



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