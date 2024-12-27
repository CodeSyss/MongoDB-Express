const { Router } = require("express");
const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote
} = require("../controllers/notes.controller");
const {isAuthenticated} = require("../helpers/auth")
const router = Router();


// Post crear
// Put actualizar 

//New Note
router.get("/notes/add", isAuthenticated,  renderNoteForm);
router.post("/notes/new_note", isAuthenticated, createNewNote);

// Get all note
router.get("/notes", isAuthenticated, renderNotes);

//edit notes
router.get("/note/edit/:id", isAuthenticated, renderEditForm); //Mostrar el form 
router.put("/note/edit/:id", isAuthenticated, updateNote) // Actualizar form 

//Delete Notes
router.delete('/notes/delete/:id', isAuthenticated, deleteNote)


module.exports = router;
