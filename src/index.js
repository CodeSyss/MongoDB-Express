const app = require("./server");

app.listen(app.set("port"), () => {
  console.log("connected to server on port ",app.set("port"));
});
