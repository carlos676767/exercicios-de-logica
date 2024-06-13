const fs = require("fs");
const path = require("path");

//programação sync
const caminho = path.basename("/exercicios/app.txt");
const lerArquivo = fs.readFileSync(caminho, "utf-8");
console.log(lerArquivo);
console.log("hello word");
