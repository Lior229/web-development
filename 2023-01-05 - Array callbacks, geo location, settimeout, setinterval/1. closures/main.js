
const myModule = (function(){
   
    //private variables 
    let privateVar = "this is a private variable";
    //private function
    function privateFunction(){
        console.log(privateVar)
    }

     return {
        publicVariable:"this is a public variable",
        publicFunction:function(){
            console.log(this.publicVariable)
        }
     }
})();




function memoizedAddTo80(){
    let cache = {

    };

    return (num) => {
        if(num in cache){
            return cache[num];
        }
        console.log('calculating...')
        cache[num] = num + 80;
        return cache[num]
       
    }
}

const memoized = memoizedAddTo80();


const obj = memoized(10);
const obj1 = memoized(10);
const obj3 = memoized(10);
const obj4 = memoized(20);






const person = {
    name:'yuval',
    age:35,
    hobbies:['running','not running']
}



const personKeys = Object.values(person);

console.log(personKeys)