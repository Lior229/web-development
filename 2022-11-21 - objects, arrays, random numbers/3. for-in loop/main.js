//creating an object
var myCustomer = {
    firstName:"Bart",
    lastName:"Simpson",
    city:"Tel-Aviv",
    email:"bart@gmail.com",
    phone:'052-1234567',
    age:18,
    creditCardNumber:"1234-1234-657-4534"
}

// for(var field in myCustomer){
//     console.log(field) // fieldName
// }

//first way of reading

// console.log(myCustomer.age) // 18


// var age = 'age';
// // second way
// console.log(myCustomer[age]) // 18



console.log('----------------------')

for(var field in myCustomer){
     console.log(field); // field name
     console.log(myCustomer[field]); // value
    // document.write(myCustomer[field] + '<br>')
   
}

