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
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(manufacturer, model, plateNum, color, maxWeight) {
        var _this = _super.call(this, manufacturer, model, plateNum, color) || this;
        _this.maxWeight = maxWeight;
        return _this;
    }
    Truck.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(this.maxWeight);
    };
    Truck.prototype.tune = function () {
        console.log('using car engine tune...');
    };
    Truck.prototype.replaceOil = function () {
        console.log('replace oil');
    };
    Truck.prototype.checkWheels = function () {
        console.log('checkWheels checkWheels');
    };
    return Truck;
}(Vehicle));
