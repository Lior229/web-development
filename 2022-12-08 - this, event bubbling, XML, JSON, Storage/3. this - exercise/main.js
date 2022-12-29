function getRandomColor(){
    //RGB
    const r = Math.floor(Math.random() * 256); // 0 - 255
    const g = Math.floor(Math.random() * 256); // 0 - 255
    const b = Math.floor(Math.random() * 256); // 0 - 255

    const color = `rgb(${r},${g},${b})`;
    return color;
}

function changeMyColor(element){
    element.style.color = getRandomColor();
    element.style.backgroundColor = getRandomColor();
}