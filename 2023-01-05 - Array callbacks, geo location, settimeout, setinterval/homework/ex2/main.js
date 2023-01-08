const locations = []
let result = ""

for (let index = 0; index < 20; index++) {
    
    const location = {
        X:Math.floor(Math.random() * 100) + 1,
        Y:Math.floor(Math.random() * 100) + 1
    }

    locations.push(location)
}


// ע"י פונקציות השייכות לאובייקט המערך (כגון forEach, filter, find, map, reduce וכדומה) הציגו את הדברים הבאים: 
// ⦁	את המערך עצמו – כל פריט בשורה נפרדת.
locations.forEach((location)=>{
    result += 'location X: ' + location.X + " location Y: " + location.Y + " <br> "
})

result += '<hr>'

// // ⦁	את האובייקט הראשון שבו x גדול מ-y.

const firstXbgY = locations.find((location)=>{
    if (location.X >location.Y ) {
        return location
    }
})

 result += 'first laction x > y: ' + firstXbgY.X + ", " + firstXbgY.Y; 
 result += '<hr>'; 

// // ⦁	את כל האובייקטים שעבורם x הוא אי-זוגי.
result += 'all loation with odd X <br>' ; 

const oddX = locations.filter((location)=>{
    if (location.X % 2 !== 0 ) {
        return location
    }
})

oddX.forEach((location)=>{
    result += 'location X: ' + location.X + " location Y: " + location.Y + " <br> "
})

result += '<hr>'

document.getElementById("result").innerHTML = result;

