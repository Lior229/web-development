 //IIFE
(() => {

    // const paragraphs =  document.querySelectorAll('.para');


    const sayHi = (e) => {
        console.log('hiiiiiii',e)
    }

    hiBtn.addEventListener('click',sayHi);

    // function sayHiAfterFiveSec(){
    //     setTimeout(() => {
    //         alert('Hi')
    //     },3000);
    // }

    function sayHiAgain(){
        
      setTimeout(() => {
         alert('Hi')
       },3000);

    }

    sayHiAfterFiveSec.addEventListener('click',sayHiAgain);

    sayHiAfterFiveSec.removeEventListener('click',sayHiAgain)



})();

