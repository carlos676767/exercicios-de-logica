
const fs = require("fs");
const objeto = {
  nome: "carlos",
  idade: 25,
  testes: 444,
};

const json = JSON.stringify(objeto);

fs.writeFile("js.json", json, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("sucesso");
});
