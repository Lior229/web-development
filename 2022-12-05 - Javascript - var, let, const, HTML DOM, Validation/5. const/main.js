const id = '303752789';


console.log(id)


function doSomeWork(){
    let num = Math.floor(Math.random() * 100);

    if ( num < 50){
        console.log(x) // crash
        let x = 10;
        console.log(x)
    }

   // const firstName; // crash
}


// doSomeWork();

const something = 10;

// something = 20; // crash


const arr = [1,2,3,4,5];

arr[2] = 3;

const person = {
    name:'Yaron',
    age: 36
}

person.age = 37;