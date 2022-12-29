function displaySomething(){
    document.write('something.... <br>');
    
    var now = new Date();

    console.log(now)
    var seconds = now.getSeconds();

    if(seconds % 2 === 0) return;

    document.write("Something else... <br>");

}

displaySomething();

