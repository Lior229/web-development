// up until now:

var firstName = "Yoni";
var lastName = "Levi";
var address = "Herzel 5";
var email = "yoni@gmail.com";
var phoneNum = "052-98712345";
var age;

console.log('age',age);


//Creating an object (literal)

// object = keys / properties / fields = values
var myCustomer = {
    firstName:"Bart",
    lastName:"Simpson",
    address:"Tel-Aviv",
    email:"bart@gmail.com",
    phoneNum:"052-1234567",
    age:17
}

//Display 
console.log(myCustomer.firstName) // Bart
document.write(myCustomer.firstName + '<br>');


//Read / Write existing field
myCustomer.address = "Haifa";
console.log(myCustomer.address) // Haifa
document.write(myCustomer.address + '<br>');


//Read / Write non-existing fields
console.log(myCustomer.creditCardNumber)//reading non existing field returns undefined;
myCustomer.creditCardNumber = '1234567-12345-12';
console.log(myCustomer.creditCardNumber);

//Another way
console.log(myCustomer["address"]);
myCustomer["address"] = 'Jerusalem';
console.log(myCustomer['address']);

var email = 'email';

console.log(myCustomer[email]);


//Delete existing field
console.log(myCustomer.phoneNum);
delete myCustomer.phoneNum;
console.log(myCustomer.phoneNum)
