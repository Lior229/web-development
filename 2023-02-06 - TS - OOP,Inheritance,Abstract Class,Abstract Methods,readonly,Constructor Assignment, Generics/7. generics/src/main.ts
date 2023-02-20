// Arrow function
// const printValue = <T>(value:T):T => {
//     console.log(value)
//     return value;
// }

function printValue<T>(value: T): T {
    console.log(value)
    return value;
}

// function printValue2(value:number):void{
//     console.log(value)
// }


// function printValue3(value:number[]):void{
//     console.log(value)
// }


printValue('hi');
const num = printValue<number>(3);
const numbers = printValue<number[]>([1, 2, 3]);
const booleans = printValue<boolean[]>([true, false, true]);
const strings = printValue<string[]>(['hello', 'world']);


const makeArray = <X, Y>(x: X, y: Y): [X, Y] => {
    return [x, y];
}

const a = makeArray(5, 6);
const b = makeArray('11', '12');
const c = makeArray('hello', 3);


// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];


interface Tab<T> {
    id: string;
    position: number;
    data: T
}

const tab: Tab<number> = {
    id: '3',
    position: 10,
    data: 3
}
const tab2: Tab<string[]> = {
    id: '3',
    position: 10,
    data: ['hello', 'world']
}

const makeFullName = <T extends { firstName: string, lastName: string }>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + obj.lastName
    }
}

makeFullName({
    hobbies: ['running', 'eating'],
    firstName: 'yuval',
    lastName: 'ronen'
});

const person = {
    name: 'yuval',
    age: 35,
}

const hobbies = ['running', 'eating'];


const personWithHobbies = {
    ...person,
    hobbies
}