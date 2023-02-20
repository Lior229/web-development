async function showUsersAsync(){
    try{
        const url = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(url);
        const users = await response.json();
        displayUsers(users);
    }catch(err){
        console.log(err)
    }
}

function displayUsers(users){
    let content = "";
    for(const user of users){
        const {name,username,email,address:{city}} = user;
        const tr = `<tr> 
                 <td>${name}</td>
                 <td>${username}</td>
                 <td>${email}</td>
                 <td>${city}</td>
          </tr>`;
          content += tr;
    }
    tableBody.innerHTML = content;
}