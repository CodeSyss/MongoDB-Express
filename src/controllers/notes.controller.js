const notesCtl = {};

module.exports = notesCtl;

notesCtl.renderNoteForm = (req, res) => {
  res.send("note add");
};

notesCtl.createNewNote = (req, res) => {
  res.send("new nota");
};

notesCtl.renderNotes = (req, res) => {
  res.send("render notes");
};

notesCtl.renderEditForm = (req, res) => {
  res.send("render edit form");
};

notesCtl.updateNote = (req, res) => {
  res.send("update note");
};

notesCtl.deleteNote = (req, res) => {
  res.send("delete Note");
};
