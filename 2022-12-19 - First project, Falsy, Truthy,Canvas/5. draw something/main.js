const myCanvas = document.getElementById("myCanvas").getContext("2d");

function paint(){
  //event.buttons === 0 ---> no mouse button click
  //event.buttons === 1---> left mouse button was clicked
  //event.buttons === 2 ---> right mouse button was clicked

  if(event.buttons === 1){
    const x = event.clientX;
    const y = event.clientY;
    myCanvas.lineTo(x,y);
    myCanvas.stroke();

  }
}


function reset(){
   
    const x = event.clientX;
    const y = event.clientY;
    myCanvas.moveTo(x,y);
}


function getImage(){
    const img = document.getElementById("myCanvas").toDataURL("image/png");

    console.log(img);
}