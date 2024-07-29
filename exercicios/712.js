const expres = require("express");
const api = expres();
api.use(expres.static("exercicios"));

api.get("/", (err, req) => {
  req.send("ola prr");
});

api.listen(8080, () => {
  console.log("servidor rodando na porta 8080");
});
