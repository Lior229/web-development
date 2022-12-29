//arrays

var grades = [90,98,84,100,60,75];
var gradesLength = grades.length;

console.log("length is:" + "" + gradesLength)

//Read / Write - first cell

console.log(grades[0]) // 90
grades[0] = 93;
console.log(grades[0]) // 93

//Read / write fourth cell
console.log(grades[4]) // 60;
console.log(grades[10]); // undefined


//never do that
// console.log(grades[10]); // undefined
// grades[10] = 50;

// grades.push(50);

// console.log(grades)

//add item to array
grades[grades.length] = 50;

//add item to array - with push
grades.push(50)


