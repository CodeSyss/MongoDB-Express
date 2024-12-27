//Esquema de las notas que vamos a guardar de la database
//Mongoose nos permite utulizar js para conectar con su BD

const { Schema, model } = require("mongoose");

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Note", NoteSchema, "NEWNotes");
