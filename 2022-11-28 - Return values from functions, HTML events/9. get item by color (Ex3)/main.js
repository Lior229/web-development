function getItemByColor(color){
    switch(color){
        case 'Yellow': return "Sun";
        case 'Red': return "Wine";
        case 'Blue': return "Sky";
        case 'Green': return "Grass";
        default: return "unknown";
    }
}

// function getItemByColor(color){
//     if(color === "Yellow")  return "Sun";
//     if(color === "Red") return "Wine";
//     if(color === "Blue") return "Sky";
//     if(color === "Green") return "Grass";
//     return "unknown";
// }


function main(){
    var color = prompt("Enter a color");
    var item = getItemByColor(color);
    document.write("item:" + item);
}

main();
