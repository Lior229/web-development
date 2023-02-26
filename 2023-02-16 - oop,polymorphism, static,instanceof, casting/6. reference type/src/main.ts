let cat1 = { name: 'Mitsi', age: 4 }; // cat 1 has a reference (pointer) to the object in memory 
let cat2 = cat1;

let str1 = 'one';
let str2 = 'two'

console.log(cat1); // mitsi, 4
console.log(cat2) // mitsi, 4

console.log(str1);
console.log(str2);

// cat1.name = 'Herzel';

console.log(cat1); // Herzel, 4
console.log(cat2) // Herzel, 4


str1 = 'hiiiiiiii';


console.log(str1);
console.log(str2);

init(cat1);

function init(cuteKitten): void {
    console.log(cuteKitten);
    cuteKitten.name = 'cookie';
    cuteKitten.age = 5;
    console.log(cuteKitten);
}

console.log(cat1)

console.log(cat2)

// how to copy an object to a new shallow copy - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


const cat3 = { name: 'yova', age: 10, hobbies: ['running', 'sleeping'] };


const cat4 = { ...cat3 };


console.log(cat4)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const number2 = [...numbers];


