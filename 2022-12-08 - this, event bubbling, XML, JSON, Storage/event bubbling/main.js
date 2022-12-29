function getRandomColor(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    const color = `rgb(${r},${g},${b})`

    return color
}

function changeColor(inputId){
    inputId.style.backgroundColor = getRandomColor()
    inputId.style.color = getRandomColor()
}

function grandparent(){
    
}


