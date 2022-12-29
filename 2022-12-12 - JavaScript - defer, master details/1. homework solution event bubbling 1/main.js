function renderContent(){

    const eventTarget = event.target;
    const contentParagraph = document.getElementById('contentParagraph');

    if(contentParagraph.innerText.length > 0){
        contentParagraph.innerText = '';
    }else if(eventTarget.matches('TD')){
        const contentParagraph = document.getElementById('contentParagraph');
        contentParagraph.innerText = event.target.innerText
    }
}

