
function reportForShirt(shirt: Shirt) {
    //
}

function reportForJeans(jeans: Jeans) {
    ///
}


//with polymorphism
function reportClothing(clothing: Clothing) {
    clothing.display();
}

const clothingArr: Clothing[] = [];

const shirt = new Shirt('leecooper', 100, 'red');
const jeans = new Jeans('nike', 200, 100);
const shirt2 = new Shirt('versace', 500, 'green');
const jeans2 = new Jeans('abu rami', 30, 100);


clothingArr.push(shirt);
clothingArr.push(jeans);
clothingArr.push(shirt2);
clothingArr.push(jeans2);

for (const c of clothingArr) {
    c.display();
}