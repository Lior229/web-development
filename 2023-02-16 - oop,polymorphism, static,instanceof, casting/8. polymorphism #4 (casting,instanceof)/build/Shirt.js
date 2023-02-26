var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shirt = /** @class */ (function (_super) {
    __extends(Shirt, _super);
    function Shirt(brand, price, color) {
        var _this = _super.call(this, brand, price) || this;
        _this.brand = brand;
        _this.price = price;
        _this.color = color;
        return _this;
    }
    Shirt.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(this.color);
    };
    return Shirt;
}(Clothing));
