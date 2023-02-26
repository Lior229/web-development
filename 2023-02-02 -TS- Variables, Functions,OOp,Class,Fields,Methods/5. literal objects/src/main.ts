const kitten1 = { name: 'Mitsi', age: 4, color: 'black' };
const kitten2 = { name: 'Shaul', age: 2, color: 'white' };
const kitten3 = { name: 'yogev', age: 5, color: 'green' };

// fields (properties)
// values

for (const k in kitten1) {
    console.log(`field name:${k}, value:${kitten1[k]}`)
}