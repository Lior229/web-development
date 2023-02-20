
$(document).ready(() => {

  for (let index = 0; index < 15; index++) {
    $('#container').append('<div class="flex-item"></div>');
  }

  const divs =  $('#container').children();

  divs.each(function(){
    const num = randomIntFromInterval(1,15);
    $(this).text(num);
    $(this).css({
        backgroundColor:randomBlueRed()
    });
  })

})

function randomIntFromInterval(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function randomBlueRed(){

  if (Math.floor(Math.random() * 256) % 2 === 0) {
    return 'blue'
  } 
    return 'red'
}


$('#blueButton').on('click',function(){

  const divs =  $('.container').children();
  console.log(this);


  if ($(this).text() === "fadeOut blue") {
    $(this).text("fadeIn blue");
    nehedar(divs, false)

  } else {
    $(this).text("fadeOut blue");
    nehedar(divs, true)
  }


})

function nehedar(divs, fadeIn){
  divs.each(function(){

    console.log(this);

    if ($(this).css("backgroundColor") === "rgb(0, 0, 255)") {
      // $(this).fadeFunction(2000);
      if(fadeIn) {
        $(this).fadeIn(2000)
      }
      else {
        $(this).fadeOut(2000)
      }
    }
  })
}