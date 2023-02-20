(() => {
    var intervalId = null

    buttonSum.addEventListener('click',() => {

         calcTo100((sum) => {
             console.log(sum)
        });

        

    })

    buttonStart.addEventListener('click',()=>{
        console.log('start');

        const startTime = Date()

        setTimeout(() => {
            console.log(startTime);
            console.log(Date());
        }, 3000);

        console.log('end');
    })

    setLimit.addEventListener('click',()=>{

        const limit = document.getElementById('limit').value
        
        if (intervalId) {
            clearInterval(intervalId)
            intervalId = null
        }

        intervalId = setInterval(()=>{

            let randomNumber = (Math.floor(Math.random() * limit) + 1)
            document.getElementById('randomNumber').innerText = randomNumber

        },1000)

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










