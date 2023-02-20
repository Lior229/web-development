 // transfer this file into a strict mode
 "use strict";

//IIFE
(() => {



    buttonSum.addEventListener('click',(e) => {
        // e = access to the current event

     sum = 0; // in strict mode - sum is not defined, we have to declare our variable 

    for(let i = 1; i <= 100; i++){
        sum += 1;
    }

    console.log("1 to 100",sum);
    console.log("1 to 100",window.sum)
    

    })



    buttonChange.addEventListener('click',() => {







       let str = "hello";
       console.log(str);

       str = "bye"; // replace hello with "bye" wont change hello
       console.log(str);


       console.log(str[0]);

       str[0] = "A";

       console.log(str[0])


    });





})();

