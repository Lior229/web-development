//instead of this
// function showMe(element){
//     const text  = element.innerText;
//     alert(text);
// }

function showMe(){
    
    const element = event.target;

    if(element.nodeName === 'TD'){
        const text  = element.innerText;
        alert(text);
    }
}