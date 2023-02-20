var Kitten = /** @class */ (function () {
    function Kitten(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.chipID = Math.floor(Math.random() * 100);
    }
    Kitten.prototype.sleep = function () {
        console.log("".concat(this.name, " is sleeping... <br>"));
    };
    Kitten.prototype.display = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.chipID);
    };
    Kitten.prototype.happyBirthDay = function () {
        this.age++;
    };
    return Kitten;
}());
