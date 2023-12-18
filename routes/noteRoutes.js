const express = require("express");
const router = express.Router();
const { addNote, deleteNote, getNotes, updateNote } = require("../controllers/notes.js");


router.post("/notes", addNote);
router.delete("/notes/:id", deleteNote);
router.get("/notes", getNotes);
router.put("/notes/:id", updateNote);


router.use(express.json());
router.use(express.urlencoded({ extended: true }));

module.exports = router;
