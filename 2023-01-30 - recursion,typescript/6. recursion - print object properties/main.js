
function display(){

    const cat = {
        name:'Mitsi',
        age:4,
        color:{
            colorName:'gray',
            eyesColor:'light'
        },
        address:{
            city:'Tel Aviv',
            street:'Hertzel',
            houseNumber:12,
            country:'Israel'
        },
        food:{
            brand:{
                brandName:'Bonzo',
                firm:'fancy bonzo for kittens',
                level:{
                    kittens:1,
                    adult:2,
                }
            }
        }
    }

    displayProperties(cat);
}


// if(typeof obj[prop] === 'object'){
//     console.log(prop)
//  }



function displayProperties(obj){
    for(const prop in obj){
        if(typeof obj[prop] === 'object'){
            displayProperties(obj[prop]);
        }
        else{
            console.log(prop)
        }

    }
 
}

