var rectangle = {
    width:80,
    height:120,
    color:'red',
    x:30,
    y:30
}

//without for in

document.write('width:' + '' + rectangle.width + '<br>')
document.write('height:' + '' + rectangle.height + '<br>')
document.write('color:' + '' + rectangle.color + '<br>')
document.write('x:' + '' + rectangle.x + '<br>')
document.write('y:' + '' + rectangle.y + '<br>')

document.write('<hr>');
//with for in

for(var key in rectangle){
    document.write(`${key}: ${rectangle[key]} <br>`)
}


