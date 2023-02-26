var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var cat1 = { name: 'Mitsi', age: 4 }; // cat 1 has a reference (pointer) to the object in memory 
var cat2 = cat1;
var str1 = 'one';
var str2 = 'two';
console.log(cat1); // mitsi, 4
console.log(cat2); // mitsi, 4
console.log(str1);
console.log(str2);
// cat1.name = 'Herzel';
console.log(cat1); // Herzel, 4
console.log(cat2); // Herzel, 4
str1 = 'hiiiiiiii';
console.log(str1);
console.log(str2);
init(cat1);
function init(cuteKitten) {
    console.log(cuteKitten);
    cuteKitten.name = 'cookie';
    cuteKitten.age = 5;
    console.log(cuteKitten);
}
console.log(cat1);
console.log(cat2);
// how to copy an object to a new shallow copy - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
var cat3 = { name: 'yova', age: 10, hobbies: ['running', 'sleeping'] };
var cat4 = __assign({}, cat3);
console.log(cat4);
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var number2 = __spreadArray([], numbers, true);
