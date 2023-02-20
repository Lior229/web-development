$(() => {
 

    $("button").on('click',() => {

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            success:(users) => {
                displayUsers(users);
            
            },
            error:function(error){
                console.log(error)
            }
        });


        console.log('is running')

    })


    function displayUsers(users){
        let content = "";
        for(const user of users){
            const {name,email} = user;
            const li = `<li>Name:${name}, Email:${email}</li>`;
            content += li;
        }
        $('ul').html(content);
    }

    

});

