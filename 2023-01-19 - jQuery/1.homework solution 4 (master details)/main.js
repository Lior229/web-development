(() => {

    
    displayUsers();


    async function getUsers(){
        try{

             const url = 'https://jsonplaceholder.typicode.com/users';
             const response =  await fetch(url);
             const users = await response.json();
             
             return users;

        }catch(e){
            console.log('error',err);
        }
    }



    async function getUserById(id){
        try{

            const url = `https://jsonplaceholder.typicode.com/users/${id}`;
            const response =  await fetch(url);
            const user = await response.json();
            
            return user;

        }catch(err){
            console.log('error',err);
            
        }
    }



    async function displayUsers(){
        try{
            const users = await getUsers();
            const select = document.createElement('select');
            

            select.addEventListener('change',displayUserById);

            select.id ="users";
    
            select.options[0] = new Option('natali','123')
            for(const user of users){
                const {id,name} = user;
                     select.options[select.options.length] = new Option(name,id);
            }
    
            body.appendChild(select);
    
            // console.log(select)
        }catch(err){
            console.log(err)
        }
        
    }

    async function displayUserById(e){
    


        try{
            const selectedUserId = e.target.value;
            const user = await getUserById(selectedUserId);
            let uList = document.getElementById('user');
            if(!uList){
                uList = document.createElement('ul');
                uList.id = "user";
            }
           

         
            const content = `
                <li>${user.username}</li>
                <li>${user.email}</li>
            `;

            uList.innerHTML = content;

            body.appendChild(uList);


            

        }catch(e){
            console.log(e)
        }

    }

    






})();

// get a user with id of {id};

// const userWithId2 = users.find((user) => user.id === id);


