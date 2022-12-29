

 
function displayFirstName(){
    document.write("Bart");
}

function displayLastName(){
    document.write("Simpson");
}

function displayFullName(){
    displayFirstName();
    document.write("<br>");
    displayFullName();
    document.write("<br>");
}

displayFullName();

