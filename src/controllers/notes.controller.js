const notesCtl = {};
const Note = require("../models/note");

module.exports = notesCtl;

notesCtl.renderNoteForm = (req, res) => {
  res.render("notes/new_note");
};

notesCtl.createNewNote = async (req, res) => {
  const { title, description } = req.body;
  //title: title ES LO MISMO QUE ESCRIBIR TITLE SOLO
  const newNote = new Note({ title, description });
  await newNote.save();
  // Al operar con la db es asíncrono
  res.redirect("/notes");
};

//Hacer una consulta a la BD
//Notas que tengo en la BD en la vista

//lean() convertir a JSON de js directamente y no un objeto de mongoose
notesCtl.renderNotes = async (req, res) => {
  const notes = await Note.find().lean();
  res.render("notes/all_notes", { notes });
};

notesCtl.renderEditForm = (req, res) => {
  res.send("render edit form");
};

notesCtl.updateNote = (req, res) => {
  res.send("update note");
};

notesCtl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.redirect("/notes");
};
