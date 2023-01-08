
const getHello = () => {
    return 'hello';
}


const word = getHello();


function person(){
    let name = 'yaron'
    let age  = 35;
    let counter = 0;



    return () => ({

          getDetails:() => {
              console.log(name,age,counter);
          },
          increase:() => {
            counter++;
          },
          changeMyName:() => {
            name = 'alon'
          }
         
      })

    
}

const fn = person();

const _person = fn();

_person.getDetails();
_person.increase();
_person.increase();
_person.increase();

_person.getDetails();
_person.changeMyName();
_person.getDetails();



let counter = 0;

function increase(){
    counter++;
}