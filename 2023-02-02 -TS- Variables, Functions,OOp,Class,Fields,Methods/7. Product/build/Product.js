var Product = /** @class */ (function () {
    function Product(name, price, description, discount, size) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.discount = discount;
        this.size = size !== null && size !== void 0 ? size : 10; // whether i have null or undefined 
    }
    Product.prototype.display = function () {
        console.log(this.name);
        console.log(this.size);
        console.log(this.description);
        console.log(this.discount);
        console.log(this.price);
    };
    return Product;
}());
