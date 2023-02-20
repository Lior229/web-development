$(document).ready(() => {

    const citiesSelect = $('#cities').on('change',function(){
      const city =  $(this).val();


      $('#data').html('');
      

      $.ajax({
        url:'./data.json',
        dataType:'json',
        success:function(response){
            const {current} = response;
            const {weather_icons,temperature,weather_descriptions} = current;

            const icon = weather_icons[0];
            const description = weather_descriptions[0];

            const temperaturePara = $(`<p> Temperature: ${temperature} &#176; </p>`);
            const descriptionPara = $(`<p> Description: ${description} &#176; </p>`);
            const _icon = $(`<img src="${icon}" alt="${description}"/>`);

            $('#data').append(temperaturePara);
            $('#data').append(descriptionPara);
            $('#data').append(_icon);



        },
        error:(function(err){
            console.log(err)
        })
      })
      

    




    })

});