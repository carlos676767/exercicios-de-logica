//revisao path

const fs = require("fs");
const path = require("path");
const caminho = path.basename("/exercicios/app.txt");
const lerArquivo = fs.readFileSync(caminho, "utf-8");
console.log(lerArquivo);
