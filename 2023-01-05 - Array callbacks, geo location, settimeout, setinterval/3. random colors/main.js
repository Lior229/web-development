

function randomColor(){

    //paint body with random color each 0.5sec;

    setInterval(() => {
           const color = getRandomColor();
           document.body.style.backgroundColor = color;
    },500)

}

// randomColor();



function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const color = `rgb(${r},${g},${b})`
    return color;
}








saySomething(() => {
      console.log('hello ');
},500)




function saySomething(cb,number){
   cb();
   console.log(number)
}
