const express = require("express");
const { engine } = require("express-handlebars");
const app = express();

app.engine("handlebars", engine());
app.set('view engine', 'handlebars');

app.get("/", (req, res) => {
  res.render("main", {leyout: false});
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
