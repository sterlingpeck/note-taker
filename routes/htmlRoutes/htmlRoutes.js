const router = require("express").Router();
const path = require("path");
const notes = require("../../data/db.json");
const { nanoid } = require("nanoid");
const { createNewNote } = require("../../lib/notes");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/", (req, res) => {
  let results = notes;
  res.json(results);
});

router.post("/", (req, res) => {
  req.body.id = nanoid();
  const note = createNewNote(req.body, notes);
  res.json(note);
});

module.exports = router;
