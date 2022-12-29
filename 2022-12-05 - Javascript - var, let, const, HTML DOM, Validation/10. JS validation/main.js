function send(){

    // take all DOM elements
    const fullNameBox = document.getElementById('fullNameBox');
    const addressBox = document.getElementById('addressBox');
    const fullNameErrorSpan = document.getElementById('fullNameErrorSpan');
    const addressErrorSpan = document.getElementById('addressErrorSpan');

    //Take box values
    const fullName = fullNameBox.value;
    const address = addressBox.value;

    // clear previous errors
    
    fullNameBox.style.backgroundColor = "";
    fullNameErrorSpan.innerText = "";

    addressBox.style.backgroundColor = ""
    addressErrorSpan.innerText = "";
    

    //validate

    if(fullName === ""){
        //alert('missing a full name!');
        event.preventDefault(); //cancel submit
        fullNameBox.focus();
        fullNameBox.style.backgroundColor = "Pink";
        fullNameErrorSpan.innerText ="Missing Full name!!!";
        return;
    }
    if(address === ""){
        //alert('missing a full name!');
        event.preventDefault(); //cancel submit
        addressBox.focus();
        addressBox.style.backgroundColor = "red";
        addressErrorSpan.innerText ="Missing address!!!";
        return;
    }
    if(address.length < 10){
        //alert('missing a full name!');
        event.preventDefault(); //cancel submit
        addressBox.focus();
        addressBox.style.backgroundColor = "green";
        addressErrorSpan.innerText ="Address must be minimum 10 chars";
        return;
    }


}