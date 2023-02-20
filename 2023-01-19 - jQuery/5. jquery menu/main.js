$(() => {


    //hide all ul
    $('li').hide();

    $('h3').on('mouseover',function(){

        // show next ul

        $(this).next().children().toggle();

        // //hide other ul
        // $(this).next().siblings('ul').slideUp(500);
    })

});