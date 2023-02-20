const url = "https://jsonplaceholder.typicode.com/users"
let myUsers = []

$(( () => {

    init().then(users => {
        myUsers = users
        // displayUsers(users);
        bulidSelect(myUsers)
    })
    .catch((err) => {
        console.log(err);
    })
    // displayUsers(users);


}));

function init(){
    return new Promise((resolve,reject) => {
        $.ajax({
            url,
            success: users => resolve(users),
            error:err =>  reject(err)
           })
    });
}

  $('#allUsers').on('click', () => {

    displayUsers(myUsers)
    
  })

  function displayUsers(users){

    let tabelContent =""
    $('tbody').html(tabelContent);

    for (const user of users) {
        const {id,name,username,email,address:{city},address:{street},company:{name:companyName}} = user;
        tabelContent += `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${username}</td>
                <td>${email}</td>
                <td>${city}</td>
                <td>${street}</td>
                <td>${companyName}</td>
            </tr>
        `
    }

    $('tbody').html(tabelContent);

}

function bulidSelect(users){
    let usersOption = ""

    for (const user of users) {
        const {id,name,username,email,address:{city},address:{street},company:{name:companyName}} = user;
        usersOption += `
            <option value=${id} > ${name} </option>
        `
    }

    // console.log(usersOption);
    $('#selectUserByName').html(usersOption);

}

$('#searchUserByID').on('click', () => {

    let IdToSearch = parseInt($('#userIdToSearch').val())

    if (IdToSearch < 1) {
        alert("enter valid id")
    }

    showUser(IdToSearch)

    $('#userIdToSearch').val("");
})

$('#selectUserByName').on('change', () => {

    let IdToSearch = $('#selectUserByName').val()

    showUser(IdToSearch)

})

function showUser(userId){

    const URL_USER_BY_ID = url + "/" + userId;

    $.ajax({
        url: URL_USER_BY_ID,
        success: (user) => {

            console.log(user);
             const { id,name,username,email,address:{city:city},address:{street},company:{name:companyName} } = user;

            let tabelContent =""
            $('tbody').html(tabelContent);
        
            tabelContent = `
                    <tr>
                        <td>${id}</td>
                        <td>${name}</td>
                        <td>${username}</td>
                        <td>${email}</td>
                        <td>${city}</td>
                        <td>${street}</td>
                        <td>${companyName}</td>
                    </tr>
                `
        
            $('tbody').html(tabelContent);
        },
        error: (err) =>  {
             console.log(err);
       }
    })

}
