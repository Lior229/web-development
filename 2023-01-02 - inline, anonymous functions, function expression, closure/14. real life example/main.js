

function test(){

    // setInterval(() =>{
    //     const now = new Date();
    //     const time = now.toLocaleTimeString();
    //     myParagraph.innerHTML = time;
    // },1000);

    alert(4)
    console.log(123)
 

    const timeoutHandler = () => {
        console.log(987)
    }

    setTimeout(timeoutHandler, 5000);


    console.log(456)


}


