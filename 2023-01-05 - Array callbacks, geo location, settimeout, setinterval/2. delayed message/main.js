function delayedMessage(){
    const message = prompt('enter your message');
    const sec = +prompt("enter delay seconds");


    console.log(1)

    setTimeout(() => {

        alert(message);

    },sec * 1000);

    console.log(2)
    console.log(3)
    console.log(4)
}







delayedMessage();

