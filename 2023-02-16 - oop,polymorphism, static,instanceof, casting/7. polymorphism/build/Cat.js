var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    Cat.prototype.display = function () {
        console.log(this.name);
        console.log(this.age);
    };
    return Cat;
}());
