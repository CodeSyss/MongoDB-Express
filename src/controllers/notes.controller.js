const notesCtl = {};
const Note = require("../models/note");

module.exports = notesCtl;

notesCtl.renderNoteForm = (req, res) => {
  console.log(req.user);
  res.render("notes/new_note");
};

notesCtl.createNewNote = async (req, res) => {
  const { title, description } = req.body;
  //title: title ES LO MISMO QUE ESCRIBIR TITLE SOLO
  const newNote = new Note({ title, description });
  newNote.user = req.user.id;
  await newNote.save();
  req.flash("success_msg", "Note added Successfully");
  // Al operar con la db es asíncrono
  res.redirect("/notes");
};

//Hacer una consulta a la BD
//Notas que tengo en la BD en la vista

//lean() convertir a JSON de js directamente y no un objeto de mongoose
notesCtl.renderNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user.id })
    .sort({ createdAt: "desc" })
    .lean();
  res.render("notes/all_notes", { notes });
};

notesCtl.renderEditForm = async (req, res) => {
  const note = await Note.findOne({ _id: req.params.id, user: req.user.id });
  if (!note) {
    req.flash("error_msg", "Not authorized");
    return res.redirect("/notes");
  }
  res.render("notes/edit_form", { note });

  // const notes = await Note.findById(req.params.id).lean();
  // notes._id = notes._id.toString();
  // if (notes.user != req.user.id) {
  //   req.flash("error_msg", "Not authorized");
  //   return res.redirect("/notes");
  // }
};

notesCtl.updateNote = async (req, res) => {
  const { title, description } = req.body;
  const updateN = await Note.findByIdAndUpdate(
    { _id: req.params.id, user: req.user.id },
    { title, description },
    { new: true }, // Asegura que se devuelva el documento actualizado.
    { runValidators: true } // Mongoose valide los datos antes de aplicarlos.
  );
  if (!updateN) {
    req.flash("error_msg", "Not authorized");
    res.redirect("/notes");
  }

  req.flash("success_msg", "Note Updated Successfully");
  res.redirect("/notes");
};

notesCtl.deleteNote = async (req, res) => {
  const notes = await Note.findByIdAndDelete({
    _id: req.params.id,
    user: req.user.id,
  });
  if (!notes) {
    req.flash("error_msg", "Not authorized");
    res.redirect("/notes");
  }
  req.flash("success_msg", "Note Deleted Successfully");
  res.redirect("/notes");
};
