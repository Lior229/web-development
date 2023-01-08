const myCanvas = document.getElementById("myCanvas").getContext("2d");

let color = "red";
let width = 10;


function paint(){

    if(event.buttons === 1){
        // left mouse button was clicked 
  
        // myCanvas.moveTo(0,0);
        myCanvas.lineTo(event.clientX,event.clientY);
        myCanvas.strokeStyle = color;
        myCanvas.lineWidth = width;
        myCanvas.stroke();
    }

}

function reset(){
    myCanvas.beginPath();
    myCanvas.moveTo(event.clientX,event.clientY);
}



function updateLineWidth(w){
    width = w;
}

function updateColor(element){
    
   const c = element.innerHTML;


    color = c;
}