const array = [];
let result = "";

for (let index = 0; index < 20; index++) {
    array[index] = Math.floor(Math.random() * 100);
}

// ע"י פונקציות השייכות לאובייקט המערך (כגון forEach, filter, find, map, reduce וכדומה) הציגו את הדברים הבאים: 
// ⦁	את המערך עצמו – כל פריט בשורה נפרדת.
array.forEach((num)=>{
    result += num + ','; 
})

result += '<hr>'; 

// ⦁	את המספר הזוגי הראשון.

const firstEven = array.find((num)=>{
    return num % 2 === 0
})

result += 'first even number: ' + firstEven; 
result += '<hr>'; 

// ⦁	את המספר הראשון שגדול מ-50.

const firstBigger50  = array.find((num)=>{
    return num > 50
})

// ⦁	את האינדקס של המספר הראשון הגדול מ-50.

const indexBigger50 = array.findIndex((num)=>{
    return num > 50;
})

result += 'first number > 50: ' + firstBigger50 + ', index: ' + indexBigger50; 
result += '<hr>'; 

// ⦁	את כל המספרים האי-זוגיים.

const oddNum = array.filter((num)=>{
    return num % 2 !== 0;
})

result += 'odd number:'; 
oddNum.forEach((num)=>{
    result += num + ','; 
})

result += '<hr>'; 

// ⦁	את כל המספרים הגדולים מ-50.

const allBigger50 = array.filter((num)=>{
    return num > 50 ;
})

result += 'al number that bigger then 50: '; 
allBigger50.forEach((num)=>{
    result += num + ','; 
})

result += '<hr>';

// ⦁	עבור כל מספר להציג האם הוא זוגי או אי-זוגי.
const mapEvenOdd = array.map((num)=>{
    return (num % 2 === 0) ? "even": "odd" ;
})

result += 'ever or odd: '; 
mapEvenOdd.forEach((num)=>{
    result += num + ','; 
})

result += '<hr>';

// ⦁	את המספר המינימלי.
const min = array.reduce((num1, num2) => Math.min(num1, num2));

result += 'min number ' + min ; 
result += '<hr>'; 

// ⦁	את המספר המקסימלי.

const max = array.reduce((num1, num2) => Math.max(num1, num2));

result += 'max number ' + max ; 
result += '<hr>'; 

document.getElementById("result").innerHTML = result;

