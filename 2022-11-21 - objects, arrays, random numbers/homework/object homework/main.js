
var rectangle = {
    width: 50,
    height: 100,
    color: "blue",
    Xpos: 200,
    Ypos: 500
}

console.log(rectangle);

for (var field in rectangle){
    document.write(field + " " + rectangle[field] + "<br>");
}

document.write("<hr>");

 var empolyee = {
     firstname: "lior",
     lastname: "goren",
     salary: 2000000,
     email: "lior@mushu.com",
     phone: 0525341003
}

console.log(empolyee);

for (var field in empolyee) {
    document.write(field + " " + empolyee[field] + "<br>");
}

document.write("<hr>");

var card = {
    type: "visa",
    cardNumber: 123514245,
    validity: "10/20/2035",
    security: 5299
}

empolyee.card = card;

console.log(empolyee);

for (var field in empolyee) {
    
    if (typeof(empolyee[field]) == "object") {
        
        document.write(field + ":   <hr>");

        for (var field2 in empolyee[field]) {
            document.write(field2 + " " + empolyee[field][field2] + "<br>");
        }

    }   else{
        document.write(field + " " + empolyee[field] + "<br>");
    }
}