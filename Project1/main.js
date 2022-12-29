const localStorageKey = 'noteKey'

// load notes from storage
const notes = loadNote();

// display the loaded array
displayNotes(notes);

//add a given Note
function addNote() {

  //Take Note values into a single object;
  const note = getNote();

  // add that object to array
  if (!note) {
    return;
  }

  notes.push(note);

  // display the loaded array
  displayNotes(notes);

  // save the notes 
  saveNotes();

}

//get Note from form 
function getNote() {

  const noteTextBox = document.getElementById('noteTextBox');
  const dateBox = document.getElementById('dateBox');
  const timeBox = document.getElementById('timeBox');

  const noteTextValidation = document.getElementById('noteTextValidation');
  const dateValidation = document.getElementById('dateValidation');
  const timeValidation = document.getElementById('timeValidation');

  const noteText = noteTextBox.value;
  const date = dateBox.value;
  const time = timeBox.value;

  if (noteText === '') {
    noteTextValidation.innerText = 'please enter a text';
    noteTextBox.style.backgroundColor = 'red';
    noteTextBox.focus();
    return;
  } else {
    noteTextBox.style.backgroundColor = 'white';
    noteTextValidation.innerText = '';
  }

  if (date === '') {
    dateValidation.innerText = 'please enter a date';
    dateBox.style.backgroundColor = 'red';
    dateBox.focus();
    return;
  } else {
    dateBox.style.backgroundColor = 'white';
    dateValidation.innerText = '';
  }

  if (time === '') {
    timeValidation.innerText = 'please enter a time';
    timeBox.style.backgroundColor = 'red';
    timeBox.focus();
    return;
  } else {
    timeBox.style.backgroundColor = 'white';
    timeValidation.innerText = '';
  }

  const noteId = Date.now();

  return { noteId, noteText, date, time };

}

function displayNotes(notes) {

  // Get table body from sreen
  const NotesTable = document.getElementById("NotesBoard");

  // Empty all notes Table
  NotesTable.innerHTML = '';

  //run on all notes
  for (const Note of notes) {

    // Add notes contant to p
    const row = `<div class="col-sm-2 noteStyle">
                      <button type="button" class="btn-close topright" onClick="deleteNote(this)" id="${Note.noteId}">
                      </button>
                      <p>${Note.noteText}</p>
                      <p class="dateposition">${Note.date}</p>
                      <p class="timeposition">${Note.time}</p>
                  </div>`;

    NotesTable.innerHTML += row;

  }
}

function saveNotes() {

  //Save notes to storage
  localStorage.setItem(localStorageKey, JSON.stringify(notes));

  //clear form fileds
  clearForm();
}

function loadNote() {
  //extract my string from storage
  const str = localStorage.getItem(localStorageKey);

  // convert str to array
  const notes = (str === null) ? [] : JSON.parse(str);

  return notes;
}

function deleteNote(note) {

  const nodeToDelete = note.id;
  console.log(nodeToDelete);
  let indexToDelete;

  for (const Note of notes) {
    if (Note.noteId == nodeToDelete) {
      indexToDelete = notes.indexOf(Note);
      break;
    }
  }

  //remove Note from arry
  notes.splice(indexToDelete, 1);

  //save arry and display
  saveNotes();
  displayNotes(notes);
}

function clearForm(){

  const noteTextBox = document.getElementById('noteTextBox');
  const dateBox = document.getElementById('dateBox');
  const timeBox = document.getElementById('timeBox');
  const noteTextValidation = document.getElementById('noteTextValidation');
  const dateValidation = document.getElementById('dateValidation');
  const timeValidation = document.getElementById('timeValidation');

  noteTextBox.value = '';
  dateBox.value = '';
  timeBox.value = '';
  noteTextValidation.innerText = '';
  dateValidation.innerText = '';
  timeValidation.innerText = '';

  noteTextBox.style.backgroundColor = 'white';
  dateBox.style.backgroundColor = 'white';
  timeBox.style.backgroundColor = 'white';
}
