// literal object
const kitten1 = { name: 'mitsi', age: 4, color: 'black', sayName: () => { console.log('mitzi') } }


// console.log(kitten1)

//Class Object
const kitten = new Kitten('yuval', 4, 'white');
const kitten2 = new Kitten('yogev', 3, 'green');
console.log(kitten)
console.log(kitten2)

kitten.sleep();
kitten2.sleep();
kitten2.display();
kitten2
kitten2.happyBirthday();
kitten2.display();

document.write('<hr>');

const kitten3 = new Kitten('Pitzi', 6, 'white');
kitten3.display();
kitten3.name = "Alon";
kitten3.age = 5;
kitten3.color = 'black';
//kitten.chipID = 43444; // error -  Property 'chipID' is private and only accessible within class 'Kitten'.
kitten3.display();

console.log(kitten3)

const date = new Date(2019, 1, 2);
const date2 = new Date(2020, 1, 2);

