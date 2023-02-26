var Kitten = /** @class */ (function () {
    function Kitten(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.chipID = Math.floor(Math.random() * 1000);
    }
    Kitten.prototype.sleep = function () {
        document.write(this.name + " is sleeping..." + "<br>");
    };
    Kitten.prototype.display = function () {
        document.write("Name: ".concat(this.name, " <br>"));
        document.write("Age: ".concat(this.age, " <br>"));
        document.write("Color: ".concat(this.color, " <br>"));
        document.write("ChipId: ".concat(this.chipID, " <br>"));
    };
    Kitten.prototype.happyBirthday = function () {
        this.age++;
    };
    return Kitten;
}());
