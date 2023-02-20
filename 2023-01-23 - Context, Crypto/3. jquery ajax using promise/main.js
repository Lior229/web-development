$(  () => {

    const API_USERS_URL = 'https://jsonplaceholder.typicode.com/users';
    const API_POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

    $('#btn1').on('click',() => {
       $.ajax({
        url:API_USERS_URL,
        success: users => displayUsers(users),
        error:err => alert(err)
       })
    })

   getJson(API_USERS_URL).then(res => {
        console.log(res)
    })





    console.log(11111)




    // $('#btn2').on('click', async () => {
    //     try{

    //         const users = await getJson(API_USERS_URL);
    //         // const posts = await getJson(API_POSTS_URL);

    //         displayUsers(users);

            
    //     }catch(err){
    //         console.log(err)
    //     }
    // })

    
    function getJson(url){
        return new Promise((resolve,reject) => {
            $.ajax({
                url,
                success: users => resolve(users),
                error:err =>  reject(err)
               })
        });
    }



    function displayUsers(users){
        let content = '';
        for(const user of users){
            content += `<li>${user.name}</li>`;
        }
        $('ul').html(content);
    }

});

