function grandparent(){
    console.log('grandparent')
}

function parent(){
    console.log('parent')
}

function child(){
    event.stopPropagation();
    console.log('child')
}