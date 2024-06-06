const minimist = require("minimist");
const processos = minimist(process.argv);
function multiplicar(a, b) {
  return a * b;
}

console.log(multiplicar(processos["n1"], processos["n2"]));