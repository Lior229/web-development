var songs = [];

// adding 3 songs to our array of songs 

for(var i = 0; i < 3; i++){
  var song = prompt('Please enter your favorite song');
  songs.push(song);
}

// splice - index to begin with , how many items you want to delete

console.log(songs)

var indexToBeginWith = 1;
var limit = 1;

songs.splice(indexToBeginWith,limit);

console.log(songs)

