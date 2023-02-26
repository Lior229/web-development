var Vehicle = /** @class */ (function () {
    function Vehicle(manufacturer, model, plateNum, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.plateNum = plateNum;
        this.color = color;
    }
    Vehicle.prototype.display = function () {
        console.log(this.manufacturer);
        console.log(this.model);
        console.log(this.plateNum);
        console.log(this.color);
    };
    return Vehicle;
}());
