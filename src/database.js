const mongoose = require("mongoose");

//MONGODB_URI = mongodb+srv://carloshernandez:19972005mano@server-mongodb.ezeyh.mongodb.net/NotesAppDB
const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env; //Variables de entorno

//const NOTES_APP_MONGODB_HOST = process.env.NOTES_APP_MONGODB_HOST;
//const NOTES_APP_MONGODB_DATABASE = process.env.NOTES_APP_MONGODB_DATABASE;

const MONGODB_URI = `mongodb+srv://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

// protocol te indica a que servidor se ejecutará en este caso es para mongodb no http p https

mongoose
  .connect(MONGODB_URI)
  .then((db) => console.log("Database is connected"))
  .catch((err) => console.log(err));
