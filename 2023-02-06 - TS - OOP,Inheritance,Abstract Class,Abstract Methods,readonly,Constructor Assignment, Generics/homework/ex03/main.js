$(() => {

    const API_JOKE_URL = "https://api.chucknorris.io/jokes/random"
    const API_JOKE_categories_URL = "https://api.chucknorris.io/jokes/categories"

    $.ajax({
        url: API_JOKE_categories_URL,
        success: function (categories) {

            let options = ""

            $('#jokeCat').html(options);
            
            categories.forEach(category => {
                options += `<option value="${category}">${category}</option>`
            });

            $('#jokeCat').html(options);
        }
    });

    $('#showJoke').click( () => { 

        let joke_url = API_JOKE_URL

        const jokeCategory = $('#jokeCat').val();

        console.log(jokeCategory)
        
        if (jokeCategory) {
            
            joke_url += `?category=${jokeCategory}`
        }
        
        
        $.ajax({
            url: joke_url,
            success: function (joke) {
                
                $('#jokePara').html(joke.value);
                
            },
            error: err => {
                console.log(err);
            } 
        });
        
        
    });
})