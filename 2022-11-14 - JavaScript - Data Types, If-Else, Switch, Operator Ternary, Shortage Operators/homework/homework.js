//⦁	קילטו שני מספרים והציגו את הגדול מביניהם. אם שניהם שווים יש להציג אחד מהם בלבד.
// var num1 = +prompt("Enter a number1");
// var num2 = +prompt("Enter a number2");
// var max  = num1 >= num2 ? num1 : num2;
// console.log(max);

//.0	קילטו ציון והציגו "עובר" אם הציון גדול או שווה ל-60, אחרת הציגו "נכשל".
// var grade = +prompt("Enter a grade");
// var result = grade >= 60 ? 'pass':'fail';
// console.log(result)

//⦁	"נכשל" אם הציון בין 0 ל-59 כולל.
// ⦁	"מספיק" אם הציון בין 60 ל-69 כולל.
// ⦁	"כמעט טוב" אם הציון בין 70 ל-79 כולל.
// ⦁	"טוב" אם הציון בין 80 ל-89 כולל.
// ⦁	"טוב מאוד" אם הציון בין 90 ל-99 כולל.
// ⦁	"מעולה" אם הציון 100.

var grade = +prompt("Enter a grade");

if (grade <= 59) {
    console.log('נכשל');
} else if (grade >= 60 && grade <= 69) {
    console.log('מספיק');
} else if (grade >= 70 && grade <= 79) {
    console.log('כמעט טוב');
} else if (grade >= 80 && grade <= 89) {
    console.log('טוב');
} else if (grade >= 90 && grade <= 99) {
    console.log('טוב מאוד');
}  else {
    console.log('מעולה');
}

