const fs = require("fs");
const path = require("path");
const notes = require("../db/db.json");

// Create a new note
function createNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "./db.json"),
    JSON.stringify(notesArray, null, 2)
  );
  return note;
}

module.exports = { createNote };
