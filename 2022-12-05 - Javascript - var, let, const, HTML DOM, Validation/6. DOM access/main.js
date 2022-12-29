function changeParagraph(){
  const coolPar = document.getElementById('coolPar');
  console.log(coolPar)
  console.log(coolPar.innerText)
  console.log(coolPar.id)
  coolPar.style.backgroundColor = 'red';
  console.log(coolPar.style.backgroundColor)
  console.log(coolPar.style.color)

 // coolPar.innerText = "Cooooooool <br> Paragraph";
 coolPar.innerHTML = "Cooooooool <br> Paragraph";


}


function showText(){
    const nameBox = document.getElementById('nameBox');
    const name = nameBox.value;

    alert("My name is " + name);
}