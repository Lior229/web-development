(()=>{

    async function getUsers() {
        
        try {
            
            const url = "https://jsonplaceholder.typicode.com/users"
            const response = await fetch(url)
            const users = await response.json()
            
            return users

        } catch (err) {
            return err
        }
    }

    async function getUserById(id){
        try {
            
            const url = `https://jsonplaceholder.typicode.com/users${id}`
            const response = await fetch(url)
            const user = await response.json()

            return user

        } catch (err) {
            return err
        }
    }

    async function displayUsers() {
        
        const users = await getUsers();
        const select = document.createElement('select')

        select.addEventListener('change',displayUserById())

        
        select.id = "users"

        for (let index = 0; index < users.length; index++) {
            const {id,name} = users[index]
            select.options[select.options.length] = new Option(name,id)
            
        }

        // for (const user in users) {
        //     const {id,name} = user
        //     select.options[select.options.length] = new Option(name,id)
        // }

        body.appendChild(select)

    }

    displayUsers()

    async function displayUserById(e){
        try {
            
            const selectUserId = e.traget.value

            console.log("displayUserById");

            const user = await getUserById(selectUserId)
            let ulList = document.createElement('user')

            if (!ulList) {
                ulList = document.createElement('ul')
                ulList.id = "user"
                
            }

            const content = `
                        <li>${user.username}</li>
                        <li>${user.email}</li>
            `

            ulList.innerHTML = content
            body.appendChild(ulList)

        } catch (err) {
            return err
        }
    }


})()