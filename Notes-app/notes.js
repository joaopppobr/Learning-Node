console.log('Starting notes.js');
const fs = require('fs');

var addNote = function(title, body) {
  var notes = [];
  var note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {
  }

  var duplicateNotes = notes.filter((note) => note.title === title);


  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }

};

var getAll = function() {
  console.log('Getting all notes');
};
var getNote = function(title) {
  console.log('Reading note', title);
};

var removeNote = function(title) {
  console.log('removing note note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
