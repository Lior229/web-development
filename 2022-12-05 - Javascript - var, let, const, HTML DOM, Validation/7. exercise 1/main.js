function display(){
    const emailBox = document.getElementById("emailBox");
    const emailParagraph = document.getElementById("emailParagraph");

    const email = emailBox.value; // my email
    emailParagraph.innerText = email;

    emailBox.style.backgroundColor = "yellow";
    emailBox.value = "";
}