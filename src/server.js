const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");

//Initializations
const app = express();

//Settings
app.set("port", process.env.PORT || 3000);
//app.set('views', __dirname + '\\views')
app.set("views", path.join(__dirname, "views"));
//__dirname ruta completa del archivo

// const hbs = exphbs.create({
//   dafaultLayout: "main",
//   layoutsDir: path.join(app.set("views"), "layouts"),
//   partialsDir : path.join(app.set("views"), "partials"),
//   extname: ".hbs",
// });

// app.engine(".hbs", hbs.engine);
// app.set("views engine", ".hbs");

app.engine(
  ".hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.set("views"), "layouts"),
    partialsDir: path.join(app.set("views"), "partials"),
    extname: ".hbs",
  })
); //Nuestro motor de plantilla handlebars
app.set("view engine", ".hbs");

//Middlewares
app.use(morgan("dev"));
app.use(methodOverride("_method")); // te permite hacer metodos delete, put dentro de un formulario
//todo la información que venga del formulario se guarda en json
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

//global-Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  next();
});

//routes
app.use(require("./routes/index.routes"));
app.use(require("./routes/notes.routes"));
app.use(require("./routes/users.routes"));

// app.get("/", (req, res) => {
//   //res.send("HELLO WORLD")

//   res.render("");
// })index;

//static files
//app.use(express.static('public'))
//app.use(express.static(path.join(__dirname + "public"))); //Para que cualquier navegador acceda facilmente, es general
app.use(express.static(path.join(__dirname, "public"))); // Archivos estáticos

module.exports = app;
