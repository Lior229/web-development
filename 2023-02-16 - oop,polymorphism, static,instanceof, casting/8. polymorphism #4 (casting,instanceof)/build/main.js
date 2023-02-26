var myClothing;
if (Math.random() < 0.5) {
    myClothing = new Shirt('leecooper', 100, 'red');
}
else {
    myClothing = new Jeans('nike', 200, 100);
}
myClothing.display();
var shirt = myClothing; // casting (down cast)
if (myClothing instanceof Shirt) {
}
else if (myClothing instanceof Jeans) {
    console.log(myClothing.length);
}
/**
 *
 * const shirt = new Shirt('leecooper', 100, 'red');
        const jeans = new Jeans('nike', 200, 100);
        const shirt2 = new Shirt('versace', 500, 'green');
        const jeans2 = new Jeans('abu rami', 30, 100);
 *
 */ 
