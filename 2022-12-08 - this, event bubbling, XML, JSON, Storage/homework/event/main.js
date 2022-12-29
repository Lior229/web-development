function showMe(){
    
    const element = event.target;
    const parag = document.getElementById('parag'); 

    if(element.nodeName === 'TD'){
        const text  = element.innerText;
        parag.innerText = text;

    }
}

function cleanText(){
    const element = event.target;
    const parag = document.getElementById('parag'); 

    if(element.nodeName === 'TD'){
        parag.innerText = '';

    }
}