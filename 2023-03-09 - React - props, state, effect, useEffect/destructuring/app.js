const cat = { name: 'shimi', age: 4, color: black };
// const name = cat.name;
// const age = cat.age;

const { name, age, color } = cat;

console.log(name, age, color);


const grades = [90, 85, 100];

// const gradeOne = grades[0];
// const gradeTwo = grades[1];

const [grade1, grade2] = grades;