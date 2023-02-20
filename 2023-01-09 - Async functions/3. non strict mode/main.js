 //IIFE
(() => {



    buttonSum.addEventListener('click',(e) => {
        // e = access to the current event

    sum = 0; // will be created inside the window object, which is BAD!

    for(let i = 1; i <= 100; i++){
        sum += 1;
    }

    console.log("1 to 100",sum);
    console.log("1 to 100",window.sum)
    

    })



    buttonChange.addEventListener('click',() => {
        const person = {
            name:'oren',
            age:35
        }

        const personB = person;
      
        personB.name = "yulia";


        console.log(person)





 




    //    let str = "hello";
    //    console.log(str);

    //    str = "bye"; // replace hello with "bye" wont change hello
    //    console.log(str);


    //    console.log(str[0]);

    //    str[0] = "A";

    //    console.log(str[0])


    //    let number = 123456789;

    //    const numberStr = number.toString();

    //    const firstDigit = numberStr.split('');

    //    console.log(firstDigit)



    });





})();

