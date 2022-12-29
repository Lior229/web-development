var movie = {
    name:"good movie",
    description:"good description",
    length:90,
    director:"Assaf"
}

document.write(`Name: ${movie.name} <br>`)
document.write(`Description: ${movie.description} <br>`)
document.write(`Length: ${movie.length} <br>`)
document.write(`Director: ${movie.director} <br>`)

movie.year = 2022;
document.write("Year" + " " + movie.year + "<br>")

delete movie.description;
document.write("Description " + movie.description)

console.log(movie)