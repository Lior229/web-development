// solution 1
// var grade = +prompt("Enter a grade");

// if (grade >= 0 && grade <= 100) {
//     console.log(grade + ' is legal');
// } else {
//     console.log('illegal grade');
// }


// solution 2 (ver.1)

// var grade = +prompt("Enter a grade");

// if (grade >= 0 && grade <= 100) {
//     console.log(grade + ' is legal');
//     if(grade >= 60){
//         console.log('pass');
//     }else{
//         console.log('fail')
//     }
// } else {
//     console.log('illegal grade');
// }


// solution 2 (ver.2)

// var grade = +prompt("Enter a grade");

// if(grade >= 0 && grade < 60){
//     console.log('fail')
// }else{
//     if(grade >= 60 && grade <=100){
//         console.log('pass')
//     }else{
//         console.log('illegal ')
//     }
// }

// solution 2 ( ver.3)   else-if

// var grade = +prompt("Enter a grade");

// if (grade >= 0 && grade < 60) {
//     console.log('fail');
// } else if (grade >= 60 && grade <= 100) {
//     console.log('pass')
// } else {
//     console.log('illegal ')
// }