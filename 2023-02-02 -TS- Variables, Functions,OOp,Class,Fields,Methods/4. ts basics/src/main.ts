// variables

let a: number;

a = 100;

//a = true // error
//a = 'hello'

let b: string;
b = 'hello';

// b = 300; // error;


let d: number | string | Date; // Union Type

d = 100;
d = "hi";
d = new Date();
//d = true; // error;

let f: any;



// functions


const f1 = (x: number, y: string): boolean => {

    console.log(x);
    console.log(y);

    return true;
}

const fn = (x: number, y: string): void => {
    console.log(x);
    console.log(y);

}


document.write("Add" + add(10, 20) + '<br>')
document.write("Add" + sub(10, 20) + '<br>')
document.write("Add" + mul(10, 20) + '<br>')
document.write("Add" + div(10, 20) + '<br>')