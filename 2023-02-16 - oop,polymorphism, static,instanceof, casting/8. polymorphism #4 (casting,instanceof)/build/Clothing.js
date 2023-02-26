var Clothing = /** @class */ (function () {
    function Clothing(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    Clothing.prototype.display = function () {
        console.log(this.brand);
        console.log(this.price);
    };
    return Clothing;
}());
