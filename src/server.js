const express = require("express");
const path = require("path");

//Initializations
const app = express();

//Settings
app.set("port", process.env.PORT || 3000);
//app.set('views', __dirname + '\\views')
app.set("views", path.join(__dirname + "views"));

//__dirname ruta completa del archivo

//Middlewares

//todo la información que venga del formulario se guarda en json
app.use(express.urlencoded({ extended: false }));

//global-Variables

//routes
app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});
//static files
//app.use(express.static('public'))
app.use(express.static(path.join(__dirname + "public"))) //Para que cualquier navegador acceda facilmente, es general


module.exports = app;
