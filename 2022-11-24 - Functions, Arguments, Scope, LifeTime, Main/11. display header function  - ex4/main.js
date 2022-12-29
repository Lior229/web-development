// function displayHeader
function displayHeader(text){
    document.write(text + "<br>");
}

// function printLine 
function printLine(){
    document.write('<hr>');
}

//displayMainHeader 
function displayMainHeader(message){
    displayHeader(message);
    printLine();
}

displayMainHeader("Welcome to my site");