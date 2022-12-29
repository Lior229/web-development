
function randomCircles(){
    const myCanvas = document.getElementById('myCanvas').getContext('2d');
    for(let i = 1; i <= 100; i++){
        drawRandomCircle(myCanvas);
    }
}


function drawRandomCircle(myCanvas){
    myCanvas.beginPath();
    const x = Math.floor(Math.random() * 701);
    const y = Math.floor(Math.random() * 401);
    const r = Math.floor(Math.random() * 101);
    myCanvas.arc(x,y,r,0,2 * Math.PI);
    myCanvas.stroke();

}



function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}