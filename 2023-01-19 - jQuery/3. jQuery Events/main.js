$(document).ready(() => {
    //will be called after HTML complete loading


//    $("p").click(() => {
//       alert('p was clicked')
//    })


//register to existing and future paragraphs 

// $('section').on('click',()=>{
//     alert('section clicked')
// })

$('section').on('click','p',function(){
    const$(this).text();
    alert(text);

})

$("#myButton").on('click',() => {
    $("section").prepend('<p>new paragraph....</p>')
    $("section").append('<p>new paragraph....</p>')
})

$('td, th').on('mouseover',function(){
    const text = $(this).text();
    $("#hoverText").html(text);
})


$('td').on('mouseout',function(){

    $("#hoverText").empty()
})




});








//how to bind external this to a callback
// const section = {
//    on:function(type,callback){
//     console.log(type)
//      const newCallback = callback.bind(this);

//      newCallback();
//    }
// }


// section.on('click',function(){
//     console.log(this)
// })