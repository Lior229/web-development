

//global scope
var firstName = "David";

document.write(firstName)

function someFunction(){
  var firstName = 'Yaron';
  var lastName = 'Levi'
    //first name refers to the global scope
    document.write(firstName)
    document.write(lastName) // Levi
}


document.write(lastName) // undefined


someFunction();





function displayNumber(num){
    document.write(num);
}



//local scoping
displayNumber(+prompt("enter your number"));



var name = "David";