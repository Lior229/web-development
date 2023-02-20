

$('button').on('click',function(){
  const divs =  $('.container').children();
  divs.each(function(){
    const num = randomIntFromInterval(1,100);
    $(this).text(num);
    $(this).css({
        backgroundColor:randomColor()
    });
  })
})





function randomIntFromInterval(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}




function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}