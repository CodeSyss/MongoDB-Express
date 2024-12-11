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
router.post("/notes/add", createNewNote);

// Get all note
router.get("/notes", renderNotes);

//Update notes
router.get("/note/update/:id", renderEditForm); //Mostrar el form 
router.put("/note/update/:id", updateNote) // Actualizar form 

//Delete Notes
router.delete('/notes/delete/:id', deleteNote)


module.exports = router;
