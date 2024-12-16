require('dotenv').config();
//config un archivo lee .end y asiga una variable de entorno

const app = require("./server");
require("./database");

app.listen(app.set("port"), () => {
  console.log("connected to server on port ", app.set("port"));
});


