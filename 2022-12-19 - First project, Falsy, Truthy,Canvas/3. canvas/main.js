
function drawRectangle(){
    const myCanvas = document.getElementById('myCanvas').getContext("2d");
    myCanvas.strokeStyle = "blue";
    myCanvas.strokeRect(100,70,200,120); // x,y,w,h
}

function fillRectangle(){
    const myCanvas = document.getElementById('myCanvas').getContext("2d");
    myCanvas.fillStyle = "red";
    myCanvas.fillRect(100,270,200,120); // x,y,w,h
}
function drawCircle(){
    const myCanvas = document.getElementById('myCanvas').getContext("2d");
     myCanvas.strokeStyle = "green";
     myCanvas.beginPath(); // start new drawing
     myCanvas.arc(300, 200, 150, 0, 2 * Math.PI);                      // x, y, r, start angle, end angle
     myCanvas.stroke();
}

function fillCircle(){
    const myCanvas = document.getElementById('myCanvas').getContext("2d");
    myCanvas.fillStyle = "magenta";
    myCanvas.beginPath(); // start new drawing
    myCanvas.arc(300, 200, 150, 0, 2 * Math.PI);                      // x, y, r, start angle, end angle
    myCanvas.fill();
}


function drawText(){
    const myCanvas = document.getElementById('myCanvas').getContext("2d");
    myCanvas.font = "40px Arial";
    myCanvas.strokeStyle = "orange";
    myCanvas.strokeText('Hello!!',100,50);
}

function fillText(){
    const myCanvas = document.getElementById('myCanvas').getContext("2d");
    myCanvas.font = "100px Arial";
    myCanvas.fillStyle = "red";
    myCanvas.fillText('Hello!!',100,200);
}

function drawLine(){
    const myCanvas = document.getElementById('myCanvas').getContext("2d");
    myCanvas.strokeStyle = "green";
    myCanvas.lineWidth = 5;
    myCanvas.beginPath();
    myCanvas.moveTo(100,70);
    myCanvas.lineTo(200,200);
    myCanvas.lineTo(300,200);
    myCanvas.stroke();
}