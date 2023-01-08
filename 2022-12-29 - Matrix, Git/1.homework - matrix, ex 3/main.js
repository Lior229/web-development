
const inventory = [];
const shoes = [];
const pants = [];
const tshirts = [];
const coats = [];



function addItemToInventory(){

    const shoesBox = document.getElementById('shoesBox');
    const pantsBox = document.getElementById('pantsBox');
    const tshirtsBox = document.getElementById('tshirtsBox');
    const coatsBox = document.getElementById('coatsBox');


    if(shoes.length === 0){
        inventory.push(shoes);
    }
    if(pants.length === 0){
        inventory.push(pants);
    }

    if(tshirts.length === 0){
        inventory.push(tshirts);
    }

    if(coats.length === 0){
        inventory.push(coats);
    }



    shoes.push(shoesBox.value);
    pants.push(pantsBox.value);
    tshirts.push(tshirtsBox.value);
    coats.push(coatsBox.value);

    shoesBox.value = '';
    pantsBox.value = '';
    tshirtsBox.value = '';
    coatsBox.value = '';

    console.log(inventory)

    displayShortestItem(inventory);
    displayLongestItem(inventory);

}

function displayShortestItem(inventory){
    let itemLength = inventory[0][0].length;
    let item = inventory[0][0];


    for(arr of inventory){
        for(category of arr){
            if(category.length < itemLength){
                itemLength = category.length
                item = category
            }
        }
    }

    console.log('itemLength', itemLength)
    console.log('item',item);
}



const longestItems = {};

const age  = 'age';

longestItems.name = 'vladi';
longestItems[age] = 35;


function displayLongestItem(inventory){
    let itemLength = 0;
    let item = null;


    for(arr of inventory){
        for(category of arr){
            if(category.length > itemLength){

                itemLength = category.length
                item = category
                longestItems[itemLength] = [];
                longestItems[itemLength].push(item);

            }else if(category.length === itemLength){
                longestItems[itemLength].push(category);         
            }
        }
    }


    console.log('longestItem', itemLength)
    console.log('item',item);
    console.log(longestItems[itemLength].join(''));

}