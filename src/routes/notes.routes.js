const { Router } = require("express");
const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote
} = require("../controllers/notes.controller");

const router = Router();


// Post crear
// Put actualizar 


//New Note
router.get("/notes/add", renderNoteForm);
router.post("/notes/new_note", createNewNote);

// Get all note
router.get("/notes", renderNotes);

//edit notes
router.get("/note/edit/:id", renderEditForm); //Mostrar el form 
router.put("/note/edit/:id", updateNote) // Actualizar form 

//Delete Notes
router.delete('/notes/delete/:id', deleteNote)


module.exports = router;
