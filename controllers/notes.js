/** @format */

const Note = require("../models/modelNotes.js");


const addNote = async (req, res) => {
	const {title, description} = req.body;

	if (!title || !description) {
		return res.status(400).json({error: "Title and description are required."});
	}

	try {
		const note = await Note.create({
			title,
			description,
		});

		res.json(note);
	} catch (error) {
		console.error(error);
		res.status(500).json({error: "An error occurred while creating the note."});
	}
};

const updateNote = async (req, res) => {
	const updatedNote = await Note.update(
	  {
		title: req.body.title,
		description: req.body.description,
	  },
	  {
		where: {
		  id: req.params.id,
		},
	  }
	);
  
	if (updatedNote[0] === 1) {
	  const updatedNoteInstance = await Note.findByPk(req.params.id);
	  res.json(updatedNoteInstance);
	} else {
	  res.status(404).json({ error: "Note not found or not updated." });
	}
  };
  

const deleteNote = async (req, res) => {
	await Note.destroy({
		where: {
			id: req.params.id,
		},
	});

	Note.findAll().then((result) => res.json(result));
};

const getNotes = async (req, res) => {
	try {
	  const notes = await Note.findAll();
	  res.json(notes);
	} catch (error) {
	  console.error('Erro ao buscar notas:', error);
	  res.status(500).json({ error: 'Erro ao buscar notas.' });
	}
  };
  

module.exports = {addNote, updateNote, deleteNote, getNotes};
