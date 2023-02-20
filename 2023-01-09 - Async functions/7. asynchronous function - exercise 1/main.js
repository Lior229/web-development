(() => {


    buttonSum.addEventListener('click',() => {

         calcTo100((sum) => {
             console.log(sum)
        });

        

    })


    function calcTo100(callback){
 
        let sum = 0;
        
     setTimeout(() => {

        for(let i = 1; i <= 100; i ++){
            sum += i;
        }

        callback(sum);

     },3000);


    }




})();










