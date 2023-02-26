var kitten1 = { name: 'Mitsi', age: 4, color: 'black' };
var kitten2 = { name: 'Shaul', age: 2, color: 'white' };
var kitten3 = { name: 'yogev', age: 5, color: 'green' };
// fields (properties)
// values
for (var k in kitten1) {
    console.log("field name:".concat(k, ", value:").concat(kitten1[k]));
}
